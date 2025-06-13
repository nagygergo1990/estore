import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/home/product-details/product-details.component';
import { ProductsGalleryComponent } from './components/home/products-gallery/products-gallery.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
    children: [
      {
        path: 'products',
        component: ProductsGalleryComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
      },
    ],
  },
  { path: '', redirectTo: '/home/products', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
