import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private httpClient : HttpClient,
  ){

  }

  items=[];

  
  addToCart(product) {
    this.items.push(product);
  }

  

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
  }

  getShippingPrice(){
    return this.httpClient.get('/assets/shipping.json')
  }
}
