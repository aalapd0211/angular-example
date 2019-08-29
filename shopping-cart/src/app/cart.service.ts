import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  items = [];
  constructor(
    private httpClient: HttpClient,
  ) { }

  addToCart(product) {
    this.items.push(product);
    this.items.forEach(item => {
      console.log('items in cart ---' + item);
    });
  }

  removeItemFromCart(product) {
    this.items.filter((item) => {
      return item.id === product.id;
    });
  }

  getCartItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

  getShippingPrices(){
    return this.httpClient.get('/assets/shipping.json');
  }
}
