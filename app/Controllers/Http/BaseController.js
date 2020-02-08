'use strict'

const Genre = use('App/Models/Genre')
const Movie = use('App/Models/Movie')
const MovieDetail = use('App/Models/MovieDetail')

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
			.with('movies', builder => {
				builder.with('details')
			})
			.first()
		movieList = movieList.toJSON()
		// response.send(movieList)
		return view.render('movie', {  movieList: movieList })
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

	async createMovie({ params, request, response, session }) {

		const movie = new Movie()

	    movie.name = request.input('name')
	    movie.image = 'https://www.w3schools.com/css/img_avatar.png'
	    movie.genre_id = params.id

	    await movie.save()

	    const movieDetail = new MovieDetail()
	    movieDetail.movie_id = movie.id
	    movieDetail.summary = request.input('summary')
	    movieDetail.director = request.input('director')
	    movieDetail.year = request.input('year')

	    await movieDetail.save()

	    session.flash({ notification: 'Movie Added!' })

	    return response.redirect('/genre/' + movie.genre_id)
	}

	async editMovie({ params, request, response, session }) {
		var movie = await Movie.query()
			.where('id', params.id)
			.first()

	    movie.name = request.input('name')
	    movie.image = 'https://www.w3schools.com/css/img_avatar.png'

	    await movie.save()

	    const movieDetail = await MovieDetail.query()
			.where('movie_id', params.id)
			.first()
	    movieDetail.director = request.input('director')
	    movieDetail.year = request.input('year')

	    await movieDetail.save()

	    session.flash({ notification: 'Movie Updated!' })

	    return response.redirect('/genre/' + movie.genre_id)
	}

	async deleteMovie({ params, response, session }) {
		var movie = await Movie.query()
			.where('id', params.id)
  			.delete()
  		var movieDetail = await MovieDetail.query()
			.where('movie_id', params.id)
			.delete()

	    session.flash({ notification: 'Movie Deleted!' })

	    return response.redirect('/genre/' + movie.genre_id)
	}
}

module.exports = BaseController
