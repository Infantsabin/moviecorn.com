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

Route.post('/genre-add', 'BaseController.createGenre').as('createGenre')
Route.post('/genre-edit/:id', 'BaseController.editGenre').as('editGenre')
Route.get('/genre-delete/:id', 'BaseController.deleteGenre').as('deleteGenre')

Route.post('/movie-add/:id', 'BaseController.createMovie').as('createMovie')
Route.post('/movie-edit/:id', 'BaseController.editMovie').as('editMovie')
Route.get('/movie-delete/:id', 'BaseController.deleteMovie').as('deleteMovie')

Route.get('*', ({ response }) => {
  return 'Sorry, page not found'
})
