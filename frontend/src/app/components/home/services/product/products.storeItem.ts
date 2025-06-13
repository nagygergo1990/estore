import { Injectable, signal } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../../types/product';

@Injectable()
export class ProductsStoreItem {
  private readonly _products = signal<Product[]>([]);
  readonly products = this._products.asReadonly();

  constructor(private productsService: ProductsService) {
    this.loadProducts();
  }

  loadProducts(filters?: {
    maincategoryid?: number;
    subcategoryid?: number;
    keyword?: string;
  }): void {
    this.productsService.getAllProducts(filters).subscribe((products) => {
      this._products.set(products);
    });
  }
}
