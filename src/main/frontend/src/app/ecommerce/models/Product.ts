export class Product {
  id: number;
  name: string;
  price: number;
  pictureUrl: string;

  constructor(id: number, name: string, price: number, pictureUrl: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.pictureUrl = pictureUrl;
  }
}
export class ProductOrder {
  product: Product;
  quantity: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}
export class ProductOrders {
  productOrders: ProductOrder[] = [];
}
