import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from './entities/product.entity';
import { Category } from '../categories/entities/category.entity';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

import { CategoriesModule } from '../categories/categories.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([Product, Category]), CategoriesModule],
})
export class ProductsModule {}
