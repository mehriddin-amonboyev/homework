import { InjectModel } from "@nestjs/sequelize";
import {Injectable} from "@nestjs/common"
import { Food } from "./sxemas";

@Injectable()
export class FoodService{
    constructor(@InjectModel(Food) private foodModel: typeof Food) { }

}