"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRoutes = void 0;
const express_1 = __importDefault(require("express"));
const express_2 = require("../config/express");
function setupRoutes(app) {
    const router = express_1.default.Router();
    // Form page
    router.get("/", (_, res) => {
        res.render("form", { letterApiDomain: express_2.letterApiDomain });
    });
    router.get("/history", (_, res) => {
        res.render("history", { letterApiDomain: express_2.letterApiDomain });
    });
    router.get("/download/:id", (_, res) => {
        res.render("download", { letterApiDomain: express_2.letterApiDomain });
    });
    app.use("/", router);
}
exports.setupRoutes = setupRoutes;
