import { Component, OnInit } from '@angular/core';
import {ProductOrders} from '../models/Product';
import {Subscription} from 'rxjs';
import {EcommerceService} from '../service/EcommerceService';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: ProductOrders;
  total: number;
  paid: boolean;
  sub: Subscription;

  constructor(private ecommerceService: EcommerceService) {
    this.orders = this.ecommerceService.orders;
  }

  ngOnInit() {
    this.paid = false;
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.orders = this.ecommerceService.orders;;
    });
    this.loadTotal();
  }

  pay() {
    this.paid = true;
    this.ecommerceService.saveOrder(this.orders).subscribe();
  }

  loadTotal() {


  }
}
