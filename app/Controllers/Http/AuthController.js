'use strict'

const { User, MessageLauncher, Token } = use('App/Helpers/imports')

class AuthController {
  async register({ request, response }) {
    try {
      const data = request.only(['username', 'email', 'password'])

      const user = await User.findOrCreate(data)

      await MessageLauncher.fireResponse(
        {
          status: 200,
          message: 'Your data has been successfully created.',
          instance: user
        },
        response
      )
    } catch (err) {
      throw await MessageLauncher.fireException({
        error: err,
        message: err.message,
        status: err.status,
        type: err.name
      })
    }
  }

  async login({ request, response, auth }) {
    try {
      const { email, password } = request.all()

      const user = await User.query()
        .where('email', email)
        .fetch()
        .then((users) => users.toJSON())

      // Check the number of active tokens
      const totalTokensActive = await Token.query()
        .where({ is_revoked: false, user_id: user[0].id })
        .fetch()

      if (totalTokensActive > 0) {
        await Token.query()
          .where({
            is_revoked: false,
            user_id: user[0].id
          })
          .update({ is_revoked: true })
      }

      const data = await auth.withRefreshToken().attempt(email, password)

      const isRevokedUpdate = await Token.query()
        .where({
          is_revoked: false,
          device: null,
          user_id: user[0].id
        })
        .update({ is_revoked: true })

      const { token, type } = data

      await MessageLauncher.fireResponse(
        {
          status: 200,
          message: 'You have successfully authenticated.',
          instance: {
            type,
            token,
            refreshToken: data.refreshToken,
            userId: user[0].id,
            isRevokedUpdate: !!isRevokedUpdate
          }
        },
        response
      )
    } catch (err) {
      throw await MessageLauncher.fireException({
        error: err,
        message: err.message,
        status: err.status,
        type: err.name
      })
    }
  }
}

module.exports = AuthController
