import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsComponent} from './products/products.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {OrdersComponent} from './orders/orders.component';

@Component({
  selector: 'app-ecommerce',
  styles: ['.container { padding-top: 10px }'],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Hannes Ecommerce</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation"
                (click)="toggleCollapsed()">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarResponsive"
             [ngClass]="{'collapse': collapsed, 'navbar-collapse': true}">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" (click)="reset()">Home
                <span class="sr-only">(current)</span>
              </a>
              <a class="nav-link" href="#" (click)="reset()">Login
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="row">
      <div class="col-md-9">
        <app-products #productsC [hidden]="orderFinished"></app-products>
      </div>
      <div class="col-md-3">
        <app-shopping-cart (onOrderFinished)=finishOrder($event) #shoppingCartC
                           [hidden]="orderFinished"></app-shopping-cart>
      </div>
      <div class="col-md-6 offset-3">
        <app-orders #ordersC [hidden]="!orderFinished"></app-orders>
      </div>
    </div>
  `

})
export class EcommerceComponent implements OnInit {
  collapsed = true;
  orderFinished = false;

  @ViewChild('productsC')
  productsC: ProductsComponent;

  @ViewChild('shoppingCartC')
  shoppingCartC: ShoppingCartComponent;

  @ViewChild('ordersC')
  ordersC: OrdersComponent;

  ngOnInit(): void {
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    this.productsC.reset();
    this.shoppingCartC.reset();
    this.ordersC.paid = false;
  }
}
