import { Component } from '@angular/core';
import { Products } from '../interfaces/products';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Cart } from '../interfaces/cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  listProduct!: Array<Products>;
  cart!: Array<Cart>;
  
  constructor(private productsService: ProductsService,private cartService: CartService){}

  ngOnInit(){
    this.productsService.getProductsList().subscribe(
      (data:any) => (this.listProduct = data.products),
      (error)=>  console.log(error),
    );

    this.cartService.getItemsFromCart().subscribe(
      (data) => {this.cart = data}
    )
  }


  addToCart(product:any){
    this.cart.push({item:product,amount:1});
    this.cartService.setItemInCart(this.cart);
  }
  removeFromCart(product:any){
    this.cart.splice(this.cart.findIndex((data)=>data.item==product))
  }

}
