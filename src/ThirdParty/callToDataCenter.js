require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

async function CallToDataCenter(query, url) {
  const DATA_CALL_CENTER_SYSTEM_HOST_NAME = process.env.DATA_CALL_CENTER_SYSTEM_HOST_NAME;
  const DATA_CALL_CENTER_SYSTEM_API_KEY = process.env.DATA_CALL_CENTER_SYSTEM_API_KEY;

  const api = DATA_CALL_CENTER_SYSTEM_HOST_NAME;
  const { body } = await chai
    .request(`${api}`)
    .post(url)
    .set('Content-type', 'application/json')
    .set('apiKey', DATA_CALL_CENTER_SYSTEM_API_KEY)
    .send(query);
    console.log(body);
  return body;
}

module.exports = {
  CallToDataCenter
}