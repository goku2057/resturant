import { connectMongoDB } from "@/db/db";
import { NextResponse } from "next/server";
import FoodItemModel, { FoodItem } from "@/db/models/foodItem/foodItem";
import { currentUser } from '@clerk/nextjs';

export async function DELETE(req: any){
    try {
        const user = await currentUser();
      
        if(!user){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            return new Response("Unauthorized", { status: 401 });
        }

        const item = await req.json()
        const id = item.itemToDelete._id
        
        if (!id) {
            return NextResponse.json({ message: "Missing 'id' parameter", status: 400 });
        }
        
        await connectMongoDB()
        // Check if the item exists
        const existingItem: FoodItem | null = await FoodItemModel.findById(id);
        if (!existingItem) {
            return NextResponse.json({ message: "Item not found", status: 404 });
        }
        
        await FoodItemModel.findByIdAndDelete(id)
        return NextResponse.json({message: "Successfully deleted an item from menu"}, { status: 201})
    }  catch (error) {
        console.error("Error deleting menu item:", error);
        return NextResponse.json({ message: "Error deleting menu item", status: 500 });
    }
}