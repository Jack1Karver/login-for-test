"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const save_data_1 = require("./save-data");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const saveData = new save_data_1.SaveData();
const app = (0, express_1.default)();
const router = (0, express_1.Router)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded());
router.post('/auth', (req, res) => {
    try {
        saveData.run(req, res);
        return res.status(200).json({ message: "Insert Succesfully" });
    }
    catch (e) {
        return res.status(400).json({ message: `${e}` });
    }
});
app.use(router);
app.listen(4001, () => {
    console.log('RUNNING ON PORT 4001');
});
