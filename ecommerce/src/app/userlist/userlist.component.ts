import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{

  users: any[] | undefined;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }




}
