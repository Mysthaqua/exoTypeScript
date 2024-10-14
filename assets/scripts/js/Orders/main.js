import OrderManager from "./OrderManager.js";
import Status from "./Status.js";
let orderCpt = 0;
const createOrder = (customer, items) => {
    return { id: orderCpt++, customer, items, status: Status.Pending };
};
const calculateTotal = (order) => {
    return order.items.reduce((price, item) => price + item.product.price, 0);
};
const orderManager = new OrderManager();
const customer1 = { id: 0, name: "Tibo", email: "tibo@mail.com" };
const customer2 = { id: 1, name: "Tibobo", email: "tibobo@mail.com" };
const product1 = {
    id: 0,
    name: "La carotte magique",
    price: 1000,
    stock: 3,
};
const orderItem1 = { customer: customer1, product: product1 };
const product2 = {
    id: 1,
    name: "La banane dimensionelle",
    price: 5000,
    stock: 1,
};
const orderItem2 = { customer: customer1, product: product2 };
const order1 = createOrder(customer1, [orderItem1, orderItem2]);
const product3 = {
    id: 2,
    name: "Un truc osef",
    price: 2,
    stock: 50000,
};
const orderItem3 = { customer: customer2, product: product3 };
const order2 = createOrder(customer2, [orderItem3]);
const product4 = {
    id: 3,
    name: "Un rein...",
    price: 45000,
    stock: 5,
};
const orderItem4 = { customer: customer1, product: product4 };
const order3 = createOrder(customer1, [orderItem4]);
orderManager.addOrder(order1);
orderManager.addOrder(order2);
console.log(orderManager);
orderManager.addOrder(order3);
console.log(orderManager);
console.log(orderManager.listOrdersByStatus(Status.Pending));
orderManager.updateOrderStatus(order3.id, Status.Shipped);
console.log(orderManager);
console.log(calculateTotal(order1));
orderManager.removeOrder(order2.id);
console.log(orderManager);
console.log(orderManager.getOrderById(0));
