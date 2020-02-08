'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GenresSchema extends Schema {
  up () {
    this.create('genres', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('image', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('genres')
  }
}

module.exports = GenresSchema
