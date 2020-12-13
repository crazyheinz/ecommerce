import {Injectable} from '@angular/core';
import {ProductOrder, ProductOrders} from '../models/Product';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EcommerceService {
  private productsUrl = "/api/products";
  private ordersUrl = "/api/orders";

  private _productOrder: ProductOrder;
  private _orders: ProductOrders = new ProductOrders();

  private productOrderSubject = new Subject();
  private ordersSubject = new Subject();
  private totalSubject = new Subject();

  private _total: number;

  ProductOrderChanged = this.productOrderSubject.asObservable();
  OrdersChanged = this.ordersSubject.asObservable();
  TotalChanged = this.totalSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get(this.productsUrl);
  }

  saveOrder(order: ProductOrders) {
    return this.http.post(this.ordersUrl, order);
  }

  get productOrder(): ProductOrder {
    return this._productOrder;
  }

  set productOrder(value: ProductOrder) {
    this._productOrder = value;
  }

  get orders(): ProductOrders {
    return this._orders;
  }

  set orders(value: ProductOrders) {
    this._orders = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }
}
