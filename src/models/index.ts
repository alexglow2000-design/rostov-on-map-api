import { title } from "process";
import sequelize from "../db";
import { DataTypes, Model, Optional } from 'sequelize'
import { ISight } from "../types/types";

interface SightCreationAttributes extends Optional<ISight, "sight_id"> {}

export interface SightInstance extends Model<ISight, SightCreationAttributes>, ISight {}

const Sight = sequelize.define<SightInstance>('sight', {
    sight_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    description2: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false},
    rate: { type: DataTypes.STRING, allowNull: true},
    location: { type: DataTypes.STRING, defaultValue: 'Ростов-на-Дону'}
}, {
    timestamps: false
})

export { Sight }