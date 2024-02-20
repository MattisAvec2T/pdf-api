"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRoutes = void 0;
const express_1 = __importDefault(require("express"));
const getLetterByIdController_1 = __importDefault(require("../controllers/getLetterByIdController"));
const getAllLettersController_1 = __importDefault(require("../controllers/getAllLettersController"));
const createLetterController_1 = __importDefault(require("../controllers/createLetterController"));
const deleteLetterByIdController_1 = __importDefault(require("../controllers/deleteLetterByIdController"));
function setupRoutes(app) {
    const letterRouter = express_1.default.Router();
    letterRouter.get("/:id", getLetterByIdController_1.default);
    letterRouter.get("/", getAllLettersController_1.default);
    letterRouter.post("/", createLetterController_1.default);
    letterRouter.delete("/:id", deleteLetterByIdController_1.default);
    app.use("/letter", letterRouter);
}
exports.setupRoutes = setupRoutes;
