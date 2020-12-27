import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {EcommerceService} from '../service/EcommerceService';
import {OrderedProduct} from '../models/OrderedProduct';
import {Product} from '../models/Product';
import {OrderedProducts} from '../models/OrderedProducts';

@Component({
  selector: 'app-products',
  styleUrls: ['./products.component.css'],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  productOrders: OrderedProduct[] = [];
  products: Product[] = [];
  selectedProductOrder: OrderedProduct;
  private shoppingCartOrders: OrderedProducts;
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
            this.productOrders.push(new OrderedProduct(product, 0));
          })
        },
        (error) => console.log(error)
      );
  }

  loadOrders() {
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    });
  }

  addToCart(order: OrderedProduct) {
    console.log(order);

    this.ecommerceService.SelectedProductOrder = order;
    this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
    this.productSelected = true;
  }

  removeFromCart(productOrder: OrderedProduct) {
    let index = this.getProductIndex(productOrder.product);
    if (index > -1) {
      this.shoppingCartOrders.productOrders.splice(
        this.getProductIndex(productOrder.product), 1);
    }
    this.ecommerceService.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.ecommerceService.ProductOrders;
    this.productSelected = false;
  }

  reset() {
    this.productOrders = [];
    this.loadProducts();
    this.ecommerceService.ProductOrders.productOrders = [];
    this.loadOrders();
    this.productSelected = false;
  }

  isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
  }

  private getProductIndex(product: Product) {
    return this.ecommerceService.ProductOrders.productOrders.findIndex(
      value => value.product === product);
  }
}
