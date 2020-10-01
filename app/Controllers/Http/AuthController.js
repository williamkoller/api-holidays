'use strict'

const { User, MessageLauncher } = use('App/Helpers/imports')

class AuthController {
  async login({ request, response }) {
    try {
      const data = request.only(['username', 'email', 'password'])

      const user = await User.create(data)

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
}

module.exports = AuthController
