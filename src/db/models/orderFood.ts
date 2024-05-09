import mongoose, { Document, Schema } from 'mongoose';

interface OrderFoodItem {
  name: string;
  description: string;
  quantity: number;
  price: number;
}

interface OrderFood extends Document {
  status: string;
  customerName: string;
  items: OrderFoodItem[];
  totalAmount: number;
}

const orderFoodItemSchema = new Schema<OrderFoodItem>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const orderFoodSchema = new Schema<OrderFood>({
  status: { type: String, required: true },
  customerName: { type: String, required: true },
  items: { type: [orderFoodItemSchema], required: true },
  totalAmount: { type: Number, required: true },
});

const OrderFood = mongoose.model<OrderFood>('OrderFood', orderFoodSchema);

export default OrderFood;
