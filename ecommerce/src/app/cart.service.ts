import { Injectable } from '@angular/core';
import {ProductItem} from "./models/product-item";
import {CartItem} from "./models/cart-item";
import {from} from "rxjs";
import {Command} from "./models/command";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storageKey : string = 'cartItems';

  items : CartItem[] = [];
  constructor(private authService: AuthService) {
    if (!sessionStorage.getItem(this.storageKey)) {
      sessionStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }
  addToCart(product: ProductItem | null | undefined, qte:number) {
    if (product) {
      let cartItem = this.items.find(item => item.product.id === product.id);
      if (cartItem) {
        cartItem.qte += qte;
      } else {
        this.items.push(new CartItem(product, qte));
      }
    }
    sessionStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  getItems() {
    let items = sessionStorage.getItem('cartItems');
    return items ? JSON.parse(items) : [];
  }

  clearCart() {
    this.items = [];
    sessionStorage.removeItem('cartItems');
  }

  getCount() {
    let items = this.getItems();
    return items.length;
  }

  validateCart(commande: Command){

    let jsonString = JSON.stringify({
      detailsCommandes: commande.details,
      client: commande.user,
      dateCommande: commande.date
    });

    console.log('Bearer '+this.authService.getToken())
    console.log(jsonString)

    return from(fetch("http://localhost:4444/commandes/add", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:jsonString
    }));
  }
}
