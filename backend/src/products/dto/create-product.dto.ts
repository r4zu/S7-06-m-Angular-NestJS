import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsBoolean,
  MinLength,
  IsOptional,
} from 'class-validator';
import { Category } from '../../categories/entities/category.entity';

export class CreateProductDto {
  @ApiProperty({
    description: 'Product name (unique)',
    nullable: false,
    minLength: 1,
    default: 'Esfero Verde',
  })
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @MinLength(1)
  description: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @MinLength(1)
  @IsOptional()
  categorie_name?: string;

  categories: Category;
}
