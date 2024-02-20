"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error404Middleware = exports.errorMiddleware = void 0;
function errorMiddleware(err, _, res) {
    res.status(500).json({ message: "Request failed", details: err });
}
exports.errorMiddleware = errorMiddleware;
function error404Middleware(_, res) {
    res.status(404).json({ message: "Ressource not found" });
}
exports.error404Middleware = error404Middleware;
