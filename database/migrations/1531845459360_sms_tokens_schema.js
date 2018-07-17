'use strict'

const Schema = use('Schema')

class SmsTokensSchema extends Schema {
  up () {
    this.create('sms_tokens', (table) => {
      table.increments()
      table.string('token', 4).notNullable().unique()
      table.string('phone', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sms_tokens')
  }
}

module.exports = SmsTokensSchema
