import { Sequelize } from "sequelize";
import configs from "../config/config.json";

const env = process.env.NODE_ENV || "development";
const config = (configs as any)[env];
export const database = new Sequelize(config);
