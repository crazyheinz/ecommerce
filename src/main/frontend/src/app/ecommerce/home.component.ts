import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsComponent} from './products/products.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {OrdersComponent} from './orders/orders.component';

@Component({
  selector: 'app-home',
  template: `
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
export class HomeComponent implements OnInit {

  orderFinished = false;

  @ViewChild('productsC')
  productsC: ProductsComponent;

  @ViewChild('shoppingCartC')
  shoppingCartC: ShoppingCartComponent;

  @ViewChild('ordersC')
  ordersC: OrdersComponent;

  ngOnInit(): void {
  }

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
    // Cleanup
    this.orderFinished = false;
    this.productsC.reset();
    this.shoppingCartC.reset();
    this.ordersC.paid = false;
  }

}
