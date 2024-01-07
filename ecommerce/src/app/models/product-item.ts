// @ts-ignore
import Array from "$GLOBAL$";
import {skip} from "rxjs";

export class ProductItem {
  id : number;
	title : string;
	description : string;
	price : number;
	discountPercentage : number;
  rating : number;
  stock : number;
  brand : string;
  category : string;
  thumbnail : string;
  images : string[];


  constructor(id: number, title: string, description: string, price: number, discountPercentage: number, rating: number, stock: number, brand: string, category: string, thumbnail: string, images: string[]) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.brand = brand;
    this.category = category;
    this.thumbnail = thumbnail;
    this.images = images;
  }
}

export class ProductsResponse {
  products: ProductItem[];
  total: number;
  skip: number;
  limit: number;


  constructor(products: ProductItem[], total: number, skip: number, limit: number) {
    this.products = products;
    this.total = total;
    this.skip = skip;
    this.limit = limit;
  }
}
