import { Component, OnInit } from '@angular/core';
import {Product, ProductOrder, ProductOrders} from '../models/Product';
import {Subscription} from 'rxjs';
import {EcommerceService} from '../service/EcommerceService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productOrders: ProductOrder[] = [];
  products: Product[] = [];
  selectedProductOrder: ProductOrder;
  private shoppingCartOrders: ProductOrders;
  sub: Subscription;
  productSelected: boolean = false;

  constructor(private ecommerceService: EcommerceService) {}

  ngOnInit() {
    this.productOrders = [];
    this.loadProducts();
    this.loadOrders();
  }

  loadProducts() {
    this.ecommerceService.getAllProducts()
      .subscribe(
        (products: any[]) => {
          this.products = products;
          this.products.forEach(product => {
            this.productOrders.push(new ProductOrder(product, 0));
          })
        },
        (error) => console.log(error)
      );
  }

  loadOrders() {
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.ecommerceService.orders;
    });
  }

  addToCart(order: ProductOrder) {
    this.ecommerceService.productOrder = order;
    this.selectedProductOrder = this.ecommerceService.productOrder;
    this.productSelected = true;
  }

  removeFromCart(productOrder: ProductOrder) {
    let index = this.getProductIndex(productOrder.product);
    if (index > -1) {
      this.shoppingCartOrders.productOrders.splice(
        this.getProductIndex(productOrder.product), 1);
    }
    this.ecommerceService.orders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.ecommerceService.orders;
    this.productSelected = false;
  }

  reset() {
    this.productOrders = [];
    this.loadProducts();
    this.ecommerceService.orders.productOrders = [];
    this.loadOrders();
    this.productSelected = false;
  }

  isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
  }

  private getProductIndex(product: Product) {
    return this.ecommerceService.orders.productOrders.findIndex(
      value => value.product === product);
  }
}
