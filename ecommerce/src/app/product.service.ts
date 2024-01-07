import {Injectable, OnInit} from '@angular/core';
import {ProductItem, ProductsResponse} from "./models/product-item";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  products: ProductItem[] | undefined;

  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get<ProductsResponse>('https://dummyjson.com/products');
  }

  getProductById(id : number){
    return this.http.get<ProductItem>('https://dummyjson.com/products/'+id);
  }


  searchProducts(name : string) {
    return this.http.get<ProductsResponse>('https://dummyjson.com/products/search?q='+name);
  }
}
