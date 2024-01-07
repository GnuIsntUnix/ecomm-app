import {ProductItem} from "./product-item";

export class CartItem {

  product : ProductItem;
  qte : number;


  constructor(product: ProductItem, qte: number) {
    this.product = product;
    this.qte = qte;
  }

}
