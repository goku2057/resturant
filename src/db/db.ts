import mongoose from "mongoose";

const url = "mongodb+srv://htdrestaurant:myheartgosalalalala@restaurant.abno73r.mongodb.net/"

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected to the database...");
    } catch (error) {
        console.log("Error connecting to the database", error);
    }
}