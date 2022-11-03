import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ChangeProductDto } from './dto/changeProductById.dto';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  async getAllProducts() {
    return this.productService.getProducts();
  }

  @HttpCode(201)
  @Post()
  async createProduct(@Body() dto: CreateProductDto) {
    return this.productService.writeProduct(dto);
  }

  @Delete(':id')
  async deleteProductById(@Param('id') id: number) {
    return this.productService.deleteProduct(id);
  }

  @Put(':id')
  async changeProductById(
    @Param('id') id: number,
    @Body() dto: ChangeProductDto,
  ) {
    return this.productService.changeProduct(id, dto);
  }
}
