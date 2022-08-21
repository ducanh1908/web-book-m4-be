"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorRoute = void 0;
const author_controller_1 = __importDefault(require("../controller/author-controller"));
const express_1 = require("express");
exports.authorRoute = (0, express_1.Router)();
exports.authorRoute.get('', author_controller_1.default.getAll);
exports.authorRoute.post('', author_controller_1.default.addAuthor);
exports.authorRoute.delete('/:id', author_controller_1.default.deleteAuthor);
exports.authorRoute.get('/detail/:id', author_controller_1.default.getAuthor);
exports.authorRoute.put('/:id', author_controller_1.default.updateAuthor);
exports.authorRoute.get('/search', author_controller_1.default.searchAuthor);
//# sourceMappingURL=author-route.js.map