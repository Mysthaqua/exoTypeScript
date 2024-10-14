import Order from "./Order.js";
import Status from "./Status.js";

export default class OrderManager {
  orders: Order[];
  constructor(orders?: Order[]) {
    this.orders = orders ?? [];
  }

  addOrder(order: Order): void {
    this.orders.push(order);
  }

  getOrderById(id: number): Order {
    return this.orders.find((order: Order): boolean => order.id === id);
  }

  updateOrderStatus(id: number, status: Status): void {
    this.getOrderById(id).status = status;
  }

  listOrdersByStatus(status: Status): Order[] {
    return this.orders.filter(
      (order: Order): boolean => order.status === status
    );
  }

  removeOrder(id: number): void {
    this.orders = this.orders.filter(
      (order: Order): boolean => order.id !== id
    );
  }
}
