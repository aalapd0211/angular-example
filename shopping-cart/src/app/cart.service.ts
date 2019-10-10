import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items=[];
  constructor() { }

  addToCart(product){
    console.log(product);
    this.items.push[product];
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
  }
}
