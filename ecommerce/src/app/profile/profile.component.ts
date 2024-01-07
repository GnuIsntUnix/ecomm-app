import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {User} from "../models/user";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  authUser: User | any;


  constructor(private authService: AuthService) {
  }


  ngOnInit(): void {
    let id = this.authService.getAuthUser();
    this.authService.getById(id).subscribe((response: any) => {
      response.json().then((data : any) => {
        console.log(data)
        this.authUser = data
      });});

  }
}
