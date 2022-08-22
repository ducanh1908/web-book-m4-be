"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = require("./src/router/router");
dotenv_1.default.config();
const PORT = 3000;
const app = (0, express_1.default)();
const DB_LOCALHOST = 'mongodb+srv://admin:admin123@cluster0.ndyjwui.mongodb.net/Book-Management';
mongoose_1.default.connect(`${DB_LOCALHOST}`).then(() => {
    console.log('DB connect success !');
})
    .catch(e => {
    console.log(e);
});
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use('', router_1.router);
mongoose_1.default.Types.ObjectId.isValid('your id here');
app.listen(PORT, () => {
    console.log(`App is running port http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map