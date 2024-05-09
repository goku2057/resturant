import { model, Schema, models } from "mongoose"

const OrderSchema = new Schema({
    email: String,
    phone: String,
    address: String,
    cartProducts: Object,
    paid: {type: Boolean, default: false}
}, {timestamps: true});

const Order = models?.Order || model("Order", OrderSchema);
export default Order;