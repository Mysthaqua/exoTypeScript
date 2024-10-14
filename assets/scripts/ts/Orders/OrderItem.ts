import Customer from "./Customer.js";
import Product from "./Product.js";

export default interface OrderItem {
  product: Product;
  customer: Customer;
}
