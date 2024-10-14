export default class OrderManager {
    constructor(orders) {
        this.orders = orders !== null && orders !== void 0 ? orders : [];
    }
    addOrder(order) {
        this.orders.push(order);
    }
    getOrderById(id) {
        return this.orders.find((order) => order.id === id);
    }
    updateOrderStatus(id, status) {
        this.getOrderById(id).status = status;
    }
    listOrdersByStatus(status) {
        return this.orders.filter((order) => order.status === status);
    }
    removeOrder(id) {
        this.orders = this.orders.filter((order) => order.id !== id);
    }
}
