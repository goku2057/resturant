import mongoose from 'mongoose';

export interface  FoodItem {
  name: String,
  description: String,
  price: Number,
  category: String,
  isCombination: Boolean,
  imageUrl: String,
}

const foodItemSchema = new mongoose.Schema<FoodItem>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['veg', 'buff', 'chicken', 'others'],
    required: true,
  },
  isCombination: {
    type: Boolean,
    default: false,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const FoodItemModel = mongoose.models.FoodItem || mongoose.model('FoodItem', foodItemSchema);

export default FoodItemModel;
