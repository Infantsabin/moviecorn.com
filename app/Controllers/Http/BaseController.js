'use strict'

const Genre = use('App/Models/Genre')
const Movie = use('App/Models/Movie')

class BaseController {
	async index({ response, view }) {
		var genreList = await Genre.all()
		genreList = genreList.toJSON()
		// response.send(genreList)
		return view.render('genre', { genreList })
	}

	async show({ params, view }) {
		var movieList = await Genre.query()
			.where('id', params.id)
			.with('movies')
			.first()
		movieList = movieList.toJSON()
		// response.send(movieList)
		return view.render('movie', { movieList: movieList.movies })
	}

	async detail({ params, view }) {
		var movieDetail = await Movie.query()
			.where('id', params.id)
			.with('details')
			.first()
		movieDetail = movieDetail.toJSON()
		// response.send(movieDetail)
		return view.render('detail', { movieDetail: movieDetail })
	}

	async createGenre({ request, response, session }) {
		const genre = new Genre()

	    genre.name = request.input('name')
	    genre.image = 'https://www.w3schools.com/css/img_avatar.png'

	    await genre.save()

	    session.flash({ notification: 'Genre Added!' })

	    return response.redirect('/')
	}

	async editGenre({ params, request, response, session }) {
		var genre = await Genre.query()
			.where('id', params.id)
			.first()

	    genre.name = request.input('name')
	    genre.image = 'https://www.w3schools.com/css/img_avatar.png'

	    await genre.save()

	    session.flash({ notification: 'Genre Updated!' })

	    return response.redirect('/')
	}

	async deleteGenre({ params, response, session }) {
		var genre = await Genre.query()
			.where('id', params.id)
  			.delete()
  		var movieDetail = await Movie.query()
			.where('genre_id', params.id)
			.with('details')
			.delete()

	    session.flash({ notification: 'Genre Deleted!' })

	    return response.redirect('/')
	}
}

module.exports = BaseController
