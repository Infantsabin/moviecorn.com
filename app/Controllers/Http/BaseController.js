'use strict'

const Genre = use('App/Models/Genre')

class BaseController {
	async index({ response, view }) {
		var genreList = await Genre.all()
		genreList = genreList.toJSON()
		// response.send(genreList)
		return view.render('genre', { genreList })
	}
}

module.exports = BaseController
