"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_2 = require("./config/express");
const routes_1 = require("./routes");
const errorHandler_1 = require("./middlewares/errorHandler");
dotenv_1.default.config();
// Configuration & Routes
const app = (0, express_1.default)();
(0, express_2.configureExpress)(app);
(0, routes_1.setupRoutes)(app);
app.use(errorHandler_1.error404Middleware);
// Server start
const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Serveur (front) démarré sur : ${HOST}:${PORT}`);
});
