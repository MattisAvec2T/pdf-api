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
const generatePDF_1 = require("../services/generatePDF");
function getAllLettersController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = Number(req.params.id);
            const response = yield (0, letters_model_1.getLetterById)(id);
            if (response) {
                const doc = (0, generatePDF_1.createLetter)(response);
                res.setHeader("Content-Type", "application/pdf");
                res.setHeader("Content-Disposition", `attachment; filename="letter_${response.sender_name}_${response.created_at}.pdf"` // response.created_at
                );
                res.status(200);
                doc.pipe(res);
                doc.end();
            }
            else {
                res.status(404).json({
                    message: "ressource not found",
                });
            }
        }
        catch (error) {
            next(error);
        }
    });
}
exports.default = getAllLettersController;
