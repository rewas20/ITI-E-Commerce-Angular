import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Products } from '../interfaces/products';
import { Router } from '@angular/router';
import { Cart } from '../interfaces/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product! : Products;
  @Input() cart! : Array<Cart>;
  
  @Output() addCart = new EventEmitter();
  @Output() removeCart = new EventEmitter();
  isAdd: boolean = false;

  constructor(private router: Router,private cartService: CartService){};
  
  ngOnInit(){
    this.cartService.getItemsFromCart().subscribe((data)=> this.cart = data,(error)=>console.log(error));
    this.isAdd = this.cart.findIndex((data)=> data.item.id==this.product.id)>-1?true:false;
  }
  
  addToCart(){
    this.addCart.emit(this.product);
    this.isAdd = true;
  }
  removeFromCart(){
    this.removeCart.emit(this.product);
    this.isAdd = false;
  }

  redirectToDetails(id:any){
    this.router.navigate(['product-details',id]);
  }

}
