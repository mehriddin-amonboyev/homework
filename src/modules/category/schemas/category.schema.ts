import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'categories', timestamps: true })
export class Category extends Model {
  @Column({ type: DataType.BIGINT, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.TEXT, allowNull: false,unique: true})
  name: string;
}
