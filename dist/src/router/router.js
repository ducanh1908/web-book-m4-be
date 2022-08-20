"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_router_1 = require("./auth-router");
exports.router = (0, express_1.Router)();
exports.router.use('', auth_router_1.authRouter);
//# sourceMappingURL=router.js.map