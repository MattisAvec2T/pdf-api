"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureExpress = exports.letterApiDomain = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.letterApiDomain = process.env.LETTER_API_DOMAIN || "http://localhost:3060/letter/";
function configureExpress(app) {
    // Use files in "public/"
    app.use(express_1.default.static("public"));
    // Render files in "public/views/ using ejs render mode
    app.set("view engine", "ejs");
    app.set("views", __dirname + "/../views/");
}
exports.configureExpress = configureExpress;
