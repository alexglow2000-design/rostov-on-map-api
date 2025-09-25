"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sight = void 0;
const db_1 = __importDefault(require("../db"));
const sequelize_1 = require("sequelize");
const Sight = db_1.default.define('sight', {
    sight_id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    description: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    description2: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    img: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    rate: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    location: { type: sequelize_1.DataTypes.STRING, defaultValue: 'Ростов-на-Дону' }
}, {
    timestamps: false
});
exports.Sight = Sight;
//# sourceMappingURL=index.js.map