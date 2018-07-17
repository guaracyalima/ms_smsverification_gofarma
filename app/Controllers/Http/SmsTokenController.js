'use strict'

const SmsToken = use('App/Models/SmsToken');
const totalvoice = require('totalvoice-node');
const client = new totalvoice("87d4101b525b25959c23e5c29bf68bf0");

class SmsTokenController {

  async access({
    request
  }) {

    const {
      phone
    } = request.all();

    let token = Math.floor(Math.random() * (Math.max(9999) - Math.min(1000)))
    var data = []
    data['phone'] = phone;
    data['token'] = token;

    await client.sms.enviar(phone, `O seu codigo de verificação do GoFarma ${token}.`)
      .then((res) => {
        data['gateway_code'] = res.dados.id
      })
      .catch(function (error) {
        return "Erro to send sms"
      });

      let xpto = {
        'phone': data['phone'],
        'token': data['token'],
        'gateway_code': data['gateway_code']
      }
      var created = SmsToken.create(xpto);
      return created

  }
}

module.exports = SmsTokenController
