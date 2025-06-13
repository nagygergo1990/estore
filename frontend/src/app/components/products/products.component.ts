import { Component } from '@angular/core';
import { ProductsService } from '../home/services/product/products.service';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../ratings/ratings.component';
import { ProductsStoreItem } from '../home/services/product/products.storeItem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RatingsComponent, FontAwesomeModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService],
})
export class ProductsComponent {
  faBoxOpen = faBoxOpen;
  constructor(public productsStoreItem: ProductsStoreItem) {}
}
