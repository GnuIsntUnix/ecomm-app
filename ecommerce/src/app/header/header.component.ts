import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CartService} from "../cart.service";
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {filter, Observable} from "rxjs";
import {SearchService} from "../search.service";
import {query} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  authStatus$: Observable<boolean>;
  searchQuery : string | undefined;


  constructor(private searchService: SearchService, private cartService : CartService, private router : Router, private authService: AuthService) {
    this.authStatus$ = this.authService.getAuthStatus$();
  }

  getCount() {
    return this.cartService.getCount();
  }

  goToCart(event: { preventDefault: () => void; }) {
    event.preventDefault();
    this.router.navigate(['/cart']);
  }

  goToHome(event: { preventDefault: () => void; }) {
    event.preventDefault();
    this.router.navigate(['/products']);
  }

  getAuthStatus(){
    return this.authService.isAuthenticated();
  }

  signOut() {
    this.authService.setAuthenticated(false);
    this.router.navigate(['/userLogin']);
  }

  search(query: string) {
    this.searchQuery = query;
    this.searchService.updateSearchQuery(query);
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.searchService.updateSearchQuery('');
        this.searchQuery = '';
      });
  }

  goCommands() {
    this.router.navigate(["/commands"])
  }

  goProfile() {
    this.router.navigate(["/profile"])
  }
}
