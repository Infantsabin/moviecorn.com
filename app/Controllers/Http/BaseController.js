'use strict'

const Genre = use('App/Models/Genre')

class BaseController {
	async getGenreList({ response }) {
		var genreList = await Genre.all()
		genreList = genreList.toJSON()
		response.send(genreList)
	}
}

module.exports = BaseController
