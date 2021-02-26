import { DataTypes, Model } from "sequelize";
import { database } from "./index";

export default class Family extends Model {
  public name!: string;
  // default:
  public readonly id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
Family.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize: database,
    modelName: "Family",
  }
);
Family.sync().then(() => console.log("Family table created"));

export interface IFamily {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
}
