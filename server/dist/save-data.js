"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveData = void 0;
class SaveData {
    run(req, res) {
        const user = req.body;
        console.log(user.login + '   ' + user.password);
    }
}
exports.SaveData = SaveData;
