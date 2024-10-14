import Customer from "./Customer.js";
import OrderItem from "./OrderItem.js";
import Status from "./Status.js";

export default interface Order {
  id: number;
  customer: Customer;
  items: OrderItem[];
  status: Status;
}
