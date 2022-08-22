"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");

const author_route_1 = require("./author-route");
const book_route_1 = require("./book-route");
const cart_detail_route_1 = require("./cart-detail-route");
const gerne_route_1 = require("./gerne-route");
const publisher_route_1 = require("./publisher-route");
exports.router = (0, express_1.Router)();
exports.router.use('/gernes', gerne_route_1.gerneRoute);
exports.router.use('/books', book_route_1.bookRoute);
exports.router.use('/authors', author_route_1.authorRoute);
exports.router.use('/cartdetails', cart_detail_route_1.cartdetailRoute);
exports.router.use('/publishers', publisher_route_1.publisherRoute);

//# sourceMappingURL=router.js.map