"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
}));
app.use(express_1.default.json());
app.use(router_1.default);
var server = app.listen(3000, function () { return console.log("🚀 Server ready"); });
//# sourceMappingURL=index.js.map