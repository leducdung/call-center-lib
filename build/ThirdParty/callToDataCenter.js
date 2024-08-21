"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
function CallToDataCenter(query, url, apiKey, host) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = yield chai
            .request(`${host}`)
            .post(url)
            .set('Content-type', 'application/json')
            .set('apiKey', apiKey)
            .send(query);
        console.log(body);
        return body;
    });
}
module.exports = {
    CallToDataCenter
};
