'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.post('login', 'AuthController.login').prefix('api')
