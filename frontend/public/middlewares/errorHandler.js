"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error404Middleware = void 0;
function error404Middleware(_, res) {
    res.status(404).render("page404");
}
exports.error404Middleware = error404Middleware;
