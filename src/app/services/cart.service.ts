import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<Array<Cart>>([]);
  private cartCunter = new BehaviorSubject<Number>(0);

  constructor() { }


  getItemsFromCart(){
    return this.cart.asObservable();
  }

  setItemInCart(cart: Array<Cart>){
    
    this.cart.next(cart);
  }

  getCounter(){
    return this.cartCunter.asObservable();
  }

  setCounter(num:Number){
    this.cartCunter.next(num);
  }



}
