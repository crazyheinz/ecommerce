import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ProductOrder, ProductOrders} from '../models/Product';
import {Subscription} from 'rxjs';
import {EcommerceService} from '../service/EcommerceService';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  orderFinished: boolean;
  orders: ProductOrders;
  total: number;
  sub: Subscription;

  @Output() onOrderFinished: EventEmitter<boolean>;

  constructor(private ecommerceService: EcommerceService) {
    this.total = 0;
    this.orderFinished = false;
    this.onOrderFinished = new EventEmitter<boolean>();
  }

  ngOnInit() {
    this.orders = new ProductOrders();
    this.loadCart();
    this.loadTotal();
  }

  loadTotal() {
    console.log('loading total')
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.total = this.calculateTotal(this.orders.productOrders);
    });
  }

  loadCart() {
    this.sub = this.ecommerceService.ProductOrderChanged.subscribe(() => {
      let productOrder = this.ecommerceService.productOrder;
      if (productOrder) {
        this.orders.productOrders.push(new ProductOrder(
          productOrder.product, productOrder.quantity));
      }
      this.ecommerceService.orders = this.orders;
      this.orders = this.ecommerceService.orders;
      this.total = this.calculateTotal(this.orders.productOrders);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  finishOrder() {
    this.orderFinished = true;
    this.ecommerceService.total = this.total;
    this.onOrderFinished.emit(this.orderFinished);
  }

  reset() {
    this.orderFinished = false;
    this.orders = new ProductOrders();
    this.orders.productOrders = []
    this.loadTotal();
    this.total = 0;
  }

  private calculateTotal(productOrders: ProductOrder[]) {
    let sum = 0;
    productOrders.forEach(value => {
      sum += (value.product.price * value.quantity);
    });
    console.log(sum);
    return sum;
  }
}
