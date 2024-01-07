import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {AuthService} from "../auth.service";
import {formatDate} from "@angular/common";
import {NgForm} from "@angular/forms";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
// @ts-ignore

@Component({
  selector: 'app-userregister',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent{
  constructor(private authService: AuthService, private router: Router) {
  }
  submitRegister(ngForm : NgForm){
    //alert(this.users?.length);

    let fd = new FormData();
    fd.append("firstName", ngForm.value["firstName"]);
    fd.append("lastName", ngForm.value["lastName"]);
    fd.append("gender", ngForm.value["gender"]);
    fd.append("username", ngForm.value["username"]);
    fd.append("phone", ngForm.value["phone"]);
    fd.append("password", ngForm.value["password"]);

    let selectedDate: NgbDateStruct = ngForm.value["birthDate"];
    let jsDate:Date = new Date(selectedDate.year, selectedDate.month - 1, selectedDate.day);

    fd.append("birthDate", jsDate.toISOString() );

    let plainObject:any = {};
    fd.forEach((value: any, key: any) => plainObject[key] = value);

    let jsonString :any = JSON.stringify(plainObject);


    this.authService.addUser(jsonString).subscribe((response: any) => {
      this.router.navigate(["/userLogin"])
    })
  }

}
