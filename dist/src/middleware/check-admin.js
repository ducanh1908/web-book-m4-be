"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_middleware_1 = require("./auth-middleware");
const checkIsAdmin = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = authorization.split(' ')[1];
        if (!accessToken) {
            res.status(401).json({
                message: 'You are anonymous'
            });
        }
        else {
            jsonwebtoken_1.default.verify(accessToken, auth_middleware_1.SECRET_KEY, (err, data) => {
                if (err) {
                    res.status(401).json({
                        error: err.message,
                        message: 'You are anonymous'
                    });
                }
                else {
                    console.log(data);
                    if (data.role === 'admin') {
                        next();
                    }
                    else {
                        res.status(401).json({
                            message: 'you are not admin'
                        });
                    }
                }
            });
        }
    }
    else {
        res.status(401).json({
            message: 'You are anonymous'
        });
    }
};
exports.checkIsAdmin = checkIsAdmin;
//# sourceMappingURL=check-admin.js.map