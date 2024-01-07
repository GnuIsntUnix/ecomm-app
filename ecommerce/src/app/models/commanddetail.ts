import {ProductItem} from "./product-item";
import {CartItem} from "./cart-item";

export class CommandDetail{
  product: number;
  qte: number;


  constructor(cartItem : CartItem) {
    this.product = cartItem.product.id;
    this.qte = cartItem.qte;
  }
}
