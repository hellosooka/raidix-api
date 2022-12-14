import { Injectable } from '@nestjs/common';
import fs = require('fs');
import path = require('path');
import { ChangeProductDto } from './dto/changeProductById.dto';
import { CreateProductDto } from './dto/createProduct.dto';

@Injectable()
export class ProductService {
  getProducts() {
    try {
      return this.readDataBase();
    } catch (e) {
      console.log('Error');
      this.createDataBase();
      return this.readDataBase();
    }
  }

  private readDataBase() {
    const rawData = fs.readFileSync(
      path.resolve(__dirname, '../db/database.json'),
    );
    const products = JSON.parse(rawData.toString());
    return products;
  }

  private createDataBase() {
    fs.mkdirSync(path.resolve(__dirname, '../db'));
    this.writeDataToDataBase({ data: [] });
  }

  private writeDataToDataBase(data) {
    fs.writeFileSync(
      path.resolve(__dirname, '../db/database.json'),
      JSON.stringify(data),
    );
  }

  writeProduct(dto: CreateProductDto) {
    const oldProducts = this.getProducts().data;
    if (oldProducts.length > 0) {
      dto['id'] = oldProducts[oldProducts.length - 1].id + 1;
    } else {
      dto['id'] = 0;
    }
    this.writeDataToDataBase({ data: [...oldProducts, dto] });

    return dto;
  }

  deleteProduct(id: number) {
    const products = this.getProducts().data;
    if (products.length) {
      const filtredProducts = products.filter((product) => product.id != id);
      this.writeDataToDataBase({ data: filtredProducts });
      return filtredProducts;
    } else {
      return { error: 'List is empty' };
    }
  }

  changeProduct(id: number, dto: ChangeProductDto) {
    const products = this.getProducts().data;
    const changedProducts = [];
    products.forEach((product) => {
      if (product.id == id) {
        product = Object.assign(product, dto);
      }
      changedProducts.push(product);
    });
    this.writeDataToDataBase({ data: changedProducts });
    return changedProducts;
  }
}
