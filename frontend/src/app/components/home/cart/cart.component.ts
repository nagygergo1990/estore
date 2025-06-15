import { Component, effect, signal, WritableSignal } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartItem } from '../types/cart.type';
import { Router } from '@angular/router';
import { CartStoreItem } from '../services/cart/cart.storeItem';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../../ratings/ratings.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoggedInUser } from '../types/user.type';
import { UserService } from '../services/user/user.service';
import { HungarianCurrencyPipe } from '../../../shared/huf.pipe';

@Component({
  selector: 'app-cart',
  imports: [
    FontAwesomeModule,
    CommonModule,
    RatingsComponent,
    ReactiveFormsModule,
    HungarianCurrencyPipe,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  faTrash = faTrash;
  faBoxOpen = faBoxOpen;
  faShoppingCart = faShoppingCart;

  user = signal<LoggedInUser>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
  });

  orderForm: WritableSignal<FormGroup>;

  constructor(
    public cartStore: CartStoreItem,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.orderForm = signal(this.createOrderForm(this.user()));
    this.userService.loggedInUser$.subscribe((u) => this.user.set(u));

    effect(() => {
      const newUser = this.user();
      this.orderForm.set(this.createOrderForm(newUser));
    });
  }

  private createOrderForm(user: LoggedInUser | null): FormGroup {
    return this.fb.group({
      name: [
        user?.firstName && user?.lastName
          ? `${user.firstName} ${user.lastName}`.trim()
          : '',
        Validators.required,
      ],
      address: [user?.address || '', Validators.required],
      city: [user?.city || '', Validators.required],
    });
  }

  navigateToHome(): void {
    this.router.navigate(['home/products']);
  }

  updateQuantity($event: any, cartItem: CartItem): void {
    if ($event.target.innerText === '+') {
      this.cartStore.addProduct(cartItem.product);
    } else if ($event.target.innerText === '-') {
      this.cartStore.decreaseProductQuantity(cartItem);
    }
  }

  removeItem(cartItem: CartItem): void {
    this.cartStore.removeProduct(cartItem);
  }

  onSubmit(): void {
    if (this.orderForm().valid) {
      console.log('Order submitted: ', this.orderForm().value);
    } else {
      console.log('Invalid order form');
    }
  }
}
