import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [];

  getAllProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find(product => product.id == id);
  }

  createProduct(product) {
    this.products.push(product);
    return product;
  }

  updateProduct(id: number, product) {
    const index = this.products.findIndex(p => p.id == id);
    if (index === -1) {
      return null;
    }
    this.products[index] = { ...this.products[index], ...product, id };
    console.log(this.products)
    return this.products[index];
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
}
