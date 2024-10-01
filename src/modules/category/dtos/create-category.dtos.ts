import { IsString, IsNotEmpty } from "class-validator";
import { CreateCategoryRequest } from "../interface";

export class CreateCategoryDto implements CreateCategoryRequest {
    @IsString()
    @IsNotEmpty()
    name: string;
}