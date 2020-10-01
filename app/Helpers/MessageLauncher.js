'user-strict'

class MessageLauncher {
  async fireException(...args) {
    let message
    let error
    let status
    let type

    if (args.length) {
      const [param] = args
      message = param.message || null
      error = param.error || null
      status = param.status || null
      type = param.type || null
    }

    return {
      message: message || '',
      name: type || 'DefaultException',
      status: status || 500,
      content: error || null
    }
  }

  async fireResponse(...args) {
    const [params, response] = args

    if (!response) throw await this.fireException()

    const { status, message, instance } = params

    const template = {
      content: {
        message: message || 'Request performed successfully',
        instance
      }
    }

    return response.status(status || 200).send(template)
  }
}

module.exports = new MessageLauncher()
