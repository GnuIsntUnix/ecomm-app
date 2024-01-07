import {CartItem} from "./cart-item";
import {User} from "./user";
// @ts-ignore
import Date from "$GLOBAL$";
import {CommandDetail} from "./commanddetail";

export class Command{
  details: CommandDetail[];
  user: number;
  date: Date;


  constructor(details: CommandDetail[], user: number, date: Date) {
    this.details = details;
    this.user = user;
    this.date = date;
  }
}
