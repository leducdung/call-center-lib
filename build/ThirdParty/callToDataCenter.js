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
function CallToDataCenter(query, url) {
    return __awaiter(this, void 0, void 0, function* () {
        const DATA_CALL_CENTER_SYSTEM_HOST_NAME = process.env.DATA_CALL_CENTER_SYSTEM_HOST_NAME || 'https://hobe-datacenter.makefamousapp.com';
        const DATA_CALL_CENTER_SYSTEM_API_KEY = process.env.DATA_CALL_CENTER_SYSTEM_API_KEY || 'e2d07e80-a1f8-11ed-a8fc-0242ac120002';
        const api = DATA_CALL_CENTER_SYSTEM_HOST_NAME;
        const { body } = yield chai
            .request(`${api}`)
            .post(url)
            .set('Content-type', 'application/json')
            .set('apiKey', DATA_CALL_CENTER_SYSTEM_API_KEY)
            .send(query);
        console.log(body);
        return body;
    });
}
module.exports = {
    CallToDataCenter
};
