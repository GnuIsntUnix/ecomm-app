import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductItem} from "../models/product-item";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {ProductService} from "../product.service";
import {SearchService} from "../search.service";
import {Subscription} from "rxjs";
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit, OnDestroy{

  products : ProductItem[] | undefined;
  searchQuery: string = '';
  private searchSubscription!: Subscription;

  constructor(private searchService: SearchService, private productService : ProductService, private authService: AuthService) {
  }

  getState(product : ProductItem){
    if (product.stock>0){
      return "En Stock";
    }
    return "En Rupture De Stock"
  }

  getColor(product : ProductItem) : string {
    if (product.stock>0){
      return "green";
    }
    return "red";
  }

  ngOnInit(): void {

    if (this.authService.isAuthenticated()) {
      this.authService.authUser().subscribe((response: any) => {
        response.json().then((data: any) => {
          this.authService.setAuthUser(data);
        });
      });
    }

    this.searchSubscription = this.searchService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
      this.filterProducts();
    });

    this.productService.getProducts()
      .subscribe(response => {
        this.products = response.products;
      });


  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  private filterProducts() {
    this.productService.searchProducts(this.searchQuery)
      .subscribe(response => {
        this.products = response.products;
      });
  }
}
