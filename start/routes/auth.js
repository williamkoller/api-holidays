'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.group(() => {
  Route.post('login', 'AuthController.login')
  Route.post('auth', 'AuthController.auth')
}).prefix('api')
