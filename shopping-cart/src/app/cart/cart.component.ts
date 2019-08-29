import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm: FormGroup;
  constructor(
    private cartService: CartService,
    private formBuider: FormBuilder,
  ) { }

  ngOnInit() {
    this.items = this.cartService.getCartItems();
    this.checkoutForm = this.formBuider.group({
      name: '',
      address : ''
    });
  }

  onSubmit(customerData){
    console.warn('Your order has been submitted');
    console.log('Form data is ---' + customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
