import { InjectModel } from '@nestjs/sequelize';
import { Category } from './schemas';
import { Injectable } from '@nestjs/common';
import { CreateCategoryRequest, UpdateCategoryRequest } from './interface';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryModel: typeof Category) { }

  async getAllCategories(): Promise<Category[]> {
    return await this.categoryModel.findAll();
  }
  async getCategory(): Promise<Category> {
    return await this.categoryModel.findOne();
  }
  async createCategory(payload: CreateCategoryRequest): Promise<void> {
    await this.categoryModel.create({
      name: payload.name
    })
  }
  async updateCategory(payload: UpdateCategoryRequest): Promise<void> {
    await this.categoryModel.update(
      { name: payload.name },
      { where: payload.id }
    )
  }
  async deleteCategory(id: number): Promise<void> {
    await this.categoryModel.destroy({
      where: { id }
    })
  }
}
