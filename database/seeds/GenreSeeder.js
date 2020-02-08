'use strict'

/*
|--------------------------------------------------------------------------
| GenreSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const seedData = [
  {
    'table': 'genres',
    'data': require('../seed_data/genres.json')
  }]

class GenreSeeder {
  async run () {
  	for (var i = 0; i < seedData.length; i++) {
      var seedDatum = seedData[i]

      var table = seedDatum.table
      var data = seedDatum.data

      await Database.table(table).insert(data)
    }
  }
}

module.exports = GenreSeeder
