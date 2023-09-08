import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Cart } from '../interfaces/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart!: Array<Cart>;
  counter: Number = 1;
  totalPrice: number = 0;
  constructor(private router: Router,private cartService: CartService){};

  ngOnInit(){
    this.cartService.getItemsFromCart().subscribe((data:any)=> this.cart=data)
    this.cartService.getItemsFromCart().subscribe((data:Array<any>)=> this.cartService.setCounter(data.length));
    this.cartService.getCounter().subscribe((data:Number)=> this.counter =data);
    this.cart.forEach(item=>{
      this.totalPrice += item.item.price-((item.item.price)*((item.item.discountPercentage)/100));
    })
  }

  removeFromCart(product:any){
    this.cart.splice(this.cart.findIndex((val)=> val.item==product),1);
  }

  redirectToDetails(id:any){
    this.router.navigate(['product-details',id]);
  }

}
