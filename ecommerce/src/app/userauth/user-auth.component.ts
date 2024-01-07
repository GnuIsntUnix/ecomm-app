import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {User} from "../models/user";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-userauth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  authStatus : boolean = false;
  constructor(private authService:AuthService, private router: Router){}

  checkUser(username : string, password : string){
      this.authService.authenticate(username, password).pipe(
        catchError((error: any) => {
          alert("Wrong Credentiels")
          return throwError(error);
        })
      )
        .subscribe((response: any) => {
          response.json().then((data : any) => {
            const token = data.token;
            this.authService.setToken(token);
          });
          alert("Nice")
          this.authService.setAuthenticated(true);
          this.router.navigate(['/products']).then(() => {
            window.location.href = window.location.protocol + '//' + window.location.host + '/products';
          });
        });


  }

  goToRegister(event: { preventDefault: () => void; }) {
    event.preventDefault();
    this.router.navigate(['/userRegister']);
  }
}
