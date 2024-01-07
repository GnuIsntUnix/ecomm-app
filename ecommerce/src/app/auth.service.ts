import { Injectable } from '@angular/core';
import {User, UsersResponse} from "./models/user";
import {ProductItem, ProductsResponse} from "./models/product-item";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, from, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authStatus = new BehaviorSubject<boolean>(this.isAuthenticated());

  httpOptions:any;

  authenticatedUser: any;


  constructor(private http:HttpClient) { }


  public isAuthenticated(): boolean {
    return localStorage.getItem('authStatus') === 'true';
  }

  getAuthStatus$() {
    return this.authStatus.asObservable();
  }

  public setAuthenticated(status: boolean): void {
    localStorage.setItem('authStatus', String(status));
    localStorage.setItem("authToken", "");
    this.authStatus.next(status);
  }

  authUser(): any {
    return from(fetch("http://localhost:4444/auth/authenticated", {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+ this.getToken(),
        'Content-Type': 'application/json',
      },
    }));
  }


  addUser(user: any): any {
    return from(fetch("http://localhost:4444/auth/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: user
    }));
  }

  authenticate(username: string, password: string): any {
    let fd = new FormData();
    fd.append("username", username);
    fd.append("password", password);

    let plainObject:any = {};
    fd.forEach((value: any, key: any) => plainObject[key] = value);

    let jsonString :any = JSON.stringify(plainObject);

    return from(fetch("http://localhost:4444/auth/authenticate", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonString
    }));
  }

  setToken(token: string){
    localStorage.setItem("authToken", token);
  }
  getToken(){
    return localStorage.getItem("authToken");
  }

  setAuthUser(user: number) {
    localStorage.setItem("authUser", String(user));
  }

  getAuthUser():any{
    return localStorage.getItem("authUser");
  }

  getById(id:number): any {
    return from(fetch("http://localhost:4444/clients/"+id, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+ this.getToken(),
        'Content-Type': 'application/json',
      },
    }));
  }

  update(user: any): any {
    return from(fetch("http://localhost:4444/clients/update", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: user
    }));
  }
}
