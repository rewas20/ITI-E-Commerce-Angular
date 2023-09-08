import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  

  constructor(private http: HttpClient) { }

  getProductsList(){
    return this.http.get('https://dummyjson.com/products',);
  }

  getProductById(id:any){
    return this.http.get('https://dummyjson.com/products/'+id,);
  }

}
