'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieDetailsSchema extends Schema {
  up () {
    this.create('movie_details', (table) => {
      table.increments()
      table.integer('movie_id', 60).notNullable()
      table.string('summary', 80).notNullable()
      table.string('director', 80).notNullable()
      table.integer('year', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('movie_details')
  }
}

module.exports = MovieDetailsSchema
