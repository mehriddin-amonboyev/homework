import { Controller, Get, Post, Body, Delete, Param,ParseIntPipe,Put} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './schemas';
import { CreateCategoryDto } from './dtos';
import { UpdateCategoryRequest } from './interface';

@Controller('categories')
export class CategoryController {
  #_service: CategoryService;

  constructor(service: CategoryService) {
    this.#_service = service;
  }

  @Get()
  async getCategories(): Promise<Category[]> {
    return await this.#_service.getAllCategories();
  }
  // async getCategory(':id'): Promise<Category> {
  //   const id = 
  //   return await this.#_service.getCategory(id);
  // }
  @Post('add')
  async createCategory(@Body() createCategoryPayload: CreateCategoryDto): Promise<void> {
    await this.#_service.createCategory(createCategoryPayload)
  }
  // @Put(':id')
  // async updateCategory(@Body() updateCategoryPayload: UpdateCategoryDto,@Param('id')){
  //   await this.#_service.deleteCategory(categoryId)

  // }

  @Delete(':id')
  async deleteCategory(@Param("id", ParseIntPipe) categoryId: number): Promise<void> {
    await this.#_service.deleteCategory(categoryId)
  }
}
