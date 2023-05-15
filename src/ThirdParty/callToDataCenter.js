require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

async function CallToDataCenter(query, url, apiKey, host) {
  const { body } = await chai
    .request(`${host}`)
    .post(url)
    .set('Content-type', 'application/json')
    .set('apiKey', apiKey)
    .send(query);
    console.log(body);
  return body;
}

module.exports = {
  CallToDataCenter
}