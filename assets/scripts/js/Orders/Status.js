var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Shipped"] = 1] = "Shipped";
    Status[Status["Delivered"] = 2] = "Delivered";
})(Status || (Status = {}));
export default Status;
