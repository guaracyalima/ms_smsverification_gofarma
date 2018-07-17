'use strict'

const Schema = use('Schema')

class SmsTokensSchema extends Schema {
  up () {
    this.create('sms_tokens', (table) => {
      table.increments()
      table.string('gateway_code')
      table.string('token', 4).notNullable()
      table.string('phone', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sms_tokens')
  }
}

module.exports = SmsTokensSchema
