"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRoute = void 0;
const express_1 = require("express");
const search_controller_1 = __importDefault(require("../controller/search-controller"));
exports.searchRoute = (0, express_1.Router)();
exports.searchRoute.post('', search_controller_1.default.search);
//# sourceMappingURL=search-route.js.map