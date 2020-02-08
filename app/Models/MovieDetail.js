'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MovieDetail extends Model {
  movies () {
    return this.belongsTo('App/Models/Movie')
  }
}

module.exports = MovieDetail
