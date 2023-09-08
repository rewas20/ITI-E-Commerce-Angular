import { Component,Output,EventEmitter } from '@angular/core';
import { Products } from '../interfaces/products';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Cart } from '../interfaces/cart';
import { find } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  cart!: Array<Cart>;
  product!: Products;
  id_selected:string = '';
  isAdd: boolean = false;
  loaderDetails: boolean = false;
  loaderCart: boolean = false;
  loaderCheckCart: boolean = false;


  constructor(private activeRoute: ActivatedRoute,private productsService: ProductsService,private cartService: CartService){
    
  }
  ngOnInit(){
    this.loaderDetails = true;
    this.loaderCart = true;
    this.id_selected = this.activeRoute.snapshot.params['id'];
    this.productsService.getProductById(this.id_selected).subscribe((data:any)=> this.product = data,
    (error)=>console.log(error),
    ()=>this.loaderDetails = false
    );
    this.cartService.getItemsFromCart().subscribe((data)=> this.cart = data,
    (error)=>console.log(error),
    ()=>{
      this.isAdd = this.cart.findIndex((data)=> data.item==this.product)>-1?true:false;
      this.loaderCart = false
    }
    );
 
  }

  addToCart(){
    this.cart.push({item: this.product,amount:1});
    this.cartService.setItemInCart(this.cart);
    this.isAdd = true;
  }
  removeFromCart(){
    this.cart.splice(this.cart.findIndex((data)=>data.item==this.product));
    this.cartService.setItemInCart(this.cart);
    this.isAdd = false;
  }


}
