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
}

module.exports = BaseController
