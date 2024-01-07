import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    }
    else {
      this.router.navigate(['/userLogin']);
      return false;
    }
  }
}
