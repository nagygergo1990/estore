import { Component } from '@angular/core';
import { ProductsService } from '../home/services/product/products.service';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../ratings/ratings.component';
import { ProductsStoreItem } from '../home/services/product/products.storeItem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartStoreItem } from '../home/services/cart/cart.storeItem';
import { Product } from '../home/types/product';
import { HungarianCurrencyPipe } from '../../shared/huf.pipe';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    RatingsComponent,
    FontAwesomeModule,
    RouterLink,
    HungarianCurrencyPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  faBoxOpen = faBoxOpen;
  faShoppingCart = faShoppingCart;

  constructor(
    public productsStoreItem: ProductsStoreItem,
    private cart: CartStoreItem
  ) {}

  addToCart(product: Product) {
    this.cart.addProduct(product);
  }
}
