import {Component, Input, OnInit} from '@angular/core';
import {ProductItem} from "../models/product-item";
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  id : number | undefined ;
  product : ProductItem | null | undefined;


  constructor(private productService : ProductService, private cartService : CartService, private route : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(event => {
      this.id = event['id'];
    })
    if (this.id != null) {
      this.productService.getProductById(this.id)
        .subscribe(response => {
          this.product = response;
        });    }
  }

  addToCart(product: ProductItem | null | undefined, qte : number) {
    this.cartService.addToCart(product, qte);
  }

  protected readonly parseInt = parseInt;
}
