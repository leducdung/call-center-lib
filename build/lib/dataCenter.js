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
Object.defineProperty(exports, "__esModule", { value: true });
exports.robotUpdateByPhone = exports.robotInsertMany = void 0;
const callToDataCenter_1 = require("../ThirdParty/callToDataCenter");
function robotInsertMany(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let customerInfo = yield (0, callToDataCenter_1.CallToDataCenter)({
                    contactRecordsData: data.contactRecordsData,
                    sliceNumber: (data === null || data === void 0 ? void 0 : data.sliceNumber) || 1,
                }, '/ContactRecord/robot/insertMany', data.config.apiKey, data.config.host);
                if (customerInfo && customerInfo.data) {
                    resolve(customerInfo.data);
                }
                else {
                    reject('failed');
                }
            }
            catch (e) {
                reject('failed');
            }
        }));
    });
}
exports.robotInsertMany = robotInsertMany;
function robotUpdateByPhone(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let customerInfo = yield (0, callToDataCenter_1.CallToDataCenter)({
                    ContactPhone: data.ContactPhone,
                    contactRecordData: data.contactRecordData,
                }, '/ContactRecord/robot/updateByPhoneNumber', data.config.apiKey, data.config.host);
                if (customerInfo && customerInfo.data) {
                    resolve(customerInfo.data);
                }
                else {
                    reject('failed');
                }
            }
            catch (e) {
                reject('failed');
            }
        }));
    });
}
exports.robotUpdateByPhone = robotUpdateByPhone;
