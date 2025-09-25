"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const config_1 = __importDefault(require("./config/config"));
const db_1 = __importDefault(require("./db"));
const start = async () => {
    try {
        await db_1.default.authenticate();
        await db_1.default.sync();
        _1.default.listen(config_1.default.port, async () => {
            console.log(`Server running on port ${config_1.default.port}`);
        });
    }
    catch (e) {
        console.log(e);
    }
};
start();
//# sourceMappingURL=server.js.map