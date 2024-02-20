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
const letters_model_1 = require("../models/letters.model");
function createLetterController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { sender_name, sender_service, sender_address, sender_zipcode, sender_town, sender_phone, sender_mail, receiver_name, receiver_service, receiver_address, receiver_zipcode, receiver_town, letter_object, letter_body, } = req.body;
            const response = yield (0, letters_model_1.createLetter)({
                sender_name: sender_name,
                sender_service: sender_service,
                sender_address: sender_address,
                sender_zipcode: sender_zipcode,
                sender_town: sender_town,
                sender_phone: sender_phone,
                sender_mail: sender_mail,
                receiver_name: receiver_name,
                receiver_service: receiver_service,
                receiver_address: receiver_address,
                receiver_zipcode: receiver_zipcode,
                receiver_town: receiver_town,
                letter_object: letter_object,
                letter_body: letter_body,
            });
            res.status(201).json(response);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.default = createLetterController;
