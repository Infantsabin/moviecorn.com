'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')

// Route.group(() => {
// 	Route.get('get-genres', 'BaseController.getGenreList').as('genres')
// }).prefix('api')
Route.get('/', 'BaseController.index') .as('home')
Route.get('/genre/:id', 'BaseController.show').as('movie')
Route.get('/movie/:id', 'BaseController.detail').as('detail')

Route.get('*', ({ response }) => {
  return 'Sorry, page not found'
})
