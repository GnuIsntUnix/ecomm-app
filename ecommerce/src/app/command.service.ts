import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {ProductItem} from "./models/product-item";
import {HttpClient} from "@angular/common/http";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private authService: AuthService, private http:HttpClient) { }

  getCommandsById(id : number){
    return from(fetch("http://localhost:4444/commandes/"+id, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+ this.authService.getToken(),
        'Content-Type': 'application/json',
      },
    }));
  }

}
