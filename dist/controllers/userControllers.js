"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.one = exports.all = exports.login = exports.add = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var add = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, login, name, firstname, result, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, login = _a.login, name = _a.name, firstname = _a.firstname;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.user.create({
                        data: {
                            login: login,
                            name: name,
                            firstname: firstname,
                        },
                    })];
            case 2:
                result = _b.sent();
                res.json(result);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.error(error_1);
                res
                    .status(500)
                    .json({ error: "An error occurred while creating the user." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.add = add;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var login, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                login = req.params.login;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                if (!(typeof login === "string")) return [3 /*break*/, 3];
                return [4 /*yield*/, prisma.user.findUnique({
                        where: {
                            login: login,
                        },
                    })];
            case 2:
                user = _a.sent();
                if (user) {
                    res.json({
                        exists: true,
                        userId: user.id,
                    });
                }
                else {
                    res.json({
                        exists: false,
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                res.json({
                    exists: false,
                });
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_2 = _a.sent();
                console.error(error_2);
                res.status(500).json({ message: "Une erreur est survenue" });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var all = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.user.findMany()];
            case 1:
                users = _a.sent();
                res.json(users);
                return [2 /*return*/];
        }
    });
}); };
exports.all = all;
var one = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.userId;
                return [4 /*yield*/, prisma.user.findUnique({
                        where: { id: parseInt(userId) },
                    })];
            case 1:
                user = _a.sent();
                console.log("RES:", user);
                res.json(user);
                return [2 /*return*/];
        }
    });
}); };
exports.one = one;
//# sourceMappingURL=userControllers.js.map