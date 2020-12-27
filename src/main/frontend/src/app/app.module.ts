import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './ecommerce/home.component';
import {ProductsComponent} from './ecommerce/products/products.component';
import {OrdersComponent} from './ecommerce/orders/orders.component';
import {ShoppingCartComponent} from './ecommerce/shopping-cart/shopping-cart.component';
import {EcommerceService} from './ecommerce/service/EcommerceService';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UsersComponent} from './ecommerce/users/users.component';
import {LoginComponent} from './ecommerce/login/login.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [
    EcommerceService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
