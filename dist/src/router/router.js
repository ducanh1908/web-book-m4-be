"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_router_1 = require("./auth-router");
const book_route_1 = require("./book-route");
const publisher_route_1 = require("./publisher-route");
const author_route_1 = require("./author-route");
const gerne_route_1 = require("./gerne-route");
exports.router = (0, express_1.Router)();
exports.router.use('', auth_router_1.authRouter);
exports.router.use('/books', book_route_1.bookRoute);
exports.router.use('/publishers', publisher_route_1.publisherRoute);
exports.router.use('/authors', author_route_1.authorRoute);
exports.router.use('/gernes', gerne_route_1.gerneRoute);
//# sourceMappingURL=router.js.map