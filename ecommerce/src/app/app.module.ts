import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {NgbDatepickerModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {ProductService} from "./product.service";
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import {CartService} from "./cart.service";
import { AuthComponent } from './auth/auth.component';
import {AuthguardService} from "./authguard.service";
import {HttpClientModule} from "@angular/common/http";
import { UserAuthComponent } from './userauth/user-auth.component';
import { UserRegisterComponent } from './userregister/user-register.component';
import { UserlistComponent } from './userlist/userlist.component';
import {AuthService} from "./auth.service";
import { SearchComponent } from './search/search.component';
import { CommandsListComponent } from './commands-list/commands-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthguardService],
    children: [
      { path: 'products', component: ListProductComponent },
      { path: 'products/product_details/:id', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'users', component: UserlistComponent }
    ]
  },
  { path: 'userLogin', component: UserAuthComponent },
  { path: 'userRegister', component: UserRegisterComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ProductDetailsComponent,
    CartComponent,
    HeaderComponent,
    AuthComponent,
    UserAuthComponent,
    UserRegisterComponent,
    UserlistComponent,
    SearchComponent,
    CommandsListComponent,
    ProfileComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'products', component: ListProductComponent},
      {path: 'products/product_details/:id', component: ProductDetailsComponent},
      {path: 'products/search/:name', component: ListProductComponent},
      {path: 'cart', component: CartComponent},
      {path: 'userLogin', component: UserAuthComponent},
      {path: 'userRegister', component: UserRegisterComponent},
      {path: 'commands', component: CommandsListComponent, canActivate:[AuthguardService]},
      {path: 'profile', component: ProfileComponent, canActivate:[AuthguardService]},
      {path: '', redirectTo: '/products', pathMatch: 'full'}
    ]),
    NgOptimizedImage,
    NgbModule,
    HttpClientModule,
    NgbDatepickerModule
  ],
  providers: [ProductService, CartService, AuthService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
