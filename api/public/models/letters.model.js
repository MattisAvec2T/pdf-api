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
exports.deleteLetterById = exports.createLetter = exports.getLetterById = exports.getAllLetters = void 0;
const database_config_1 = require("../config/database.config");
function getAllLetters() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_config_1.db.selectFrom("letters").selectAll().execute();
    });
}
exports.getAllLetters = getAllLetters;
function getLetterById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_config_1.db
            .selectFrom("letters")
            .selectAll()
            .where("id", "=", id)
            .executeTakeFirst();
    });
}
exports.getLetterById = getLetterById;
function createLetter(letterData) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_config_1.db
            .insertInto("letters")
            .values(letterData)
            .returningAll()
            .executeTakeFirstOrThrow();
        if (result) {
            return {
                message: "successefully created",
                id: result.id,
            };
        }
        else {
            throw new Error("Query failed");
        }
    });
}
exports.createLetter = createLetter;
function deleteLetterById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield database_config_1.db
            .deleteFrom("letters")
            .where("id", "=", id)
            .executeTakeFirst();
        if (result) {
            return {
                message: "successefully deleted",
                id: id,
            };
        }
        else {
            throw new Error("Query failed");
        }
    });
}
exports.deleteLetterById = deleteLetterById;
