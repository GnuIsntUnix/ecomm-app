import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {CartItem} from "../models/cart-item";
// @ts-ignore
import Array from "$GLOBAL$";
import {AuthService} from "../auth.service";
import {Command} from "../models/command";
import {Router} from "@angular/router";
import {CommandDetail} from "../models/commanddetail";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{


  products : Array<CartItem>;

  constructor( private cartService : CartService, private authService : AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.products = this.cartService.getItems();
    if (this.authService.isAuthenticated()) {
      this.authService.authUser().subscribe((response: any) => {
        response.json().then((data: any) => {
          this.authService.setAuthUser(data);
        });
      });
    }
  }

  clearCart(){
    window.location.reload();
    this.cartService.clearCart();
  }

  validateCart(){
    if (this.authService.isAuthenticated()) {
      const commandDetails: CommandDetail[] = this.products.map((cartItem: CartItem) => new CommandDetail(cartItem));
      let date = new Date().toISOString()
      let user = this.authService.getAuthUser();
      let commande: Command = {details:commandDetails, date:date, user:parseInt(user)}
      this.cartService.validateCart(commande).subscribe(response => {
        console.log(response.json());
      });
      this.clearCart();
    }

    else {
      this.router.navigate(['/userLogin']);
    }
  }





}
