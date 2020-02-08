'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Movie extends Model {
  details () {
    return this.hasMany('App/Models/MovieDetail')
  }
}

module.exports = Movie
