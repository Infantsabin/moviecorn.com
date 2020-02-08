'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MoviesSchema extends Schema {
  up () {
    this.create('movies', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('image', 60).notNullable()
      table.integer('genre_id', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('movies')
  }
}

module.exports = MoviesSchema
