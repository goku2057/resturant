import { connectMongoDB } from "@/db/db";
import { NextResponse } from "next/server";
import FoodItemModel, {FoodItem} from "@/db/models/foodItem/foodItem";
import { currentUser } from '@clerk/nextjs';

export async function POST(req: any){
    try {

        const user = await currentUser();
      
        if(!user){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            return new Response("Unauthorized", { status: 401 });
        }

        // secure this endpoint and remaining
        const {name, description, price, category, isCombination, imageUrl}: FoodItem =  await req.json()
        await connectMongoDB();

        await FoodItemModel.create({name, description, price, category, isCombination, imageUrl});
        return NextResponse.json({message: "Item is added in the database"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Failed to add the item in database."}, {status: 500});
    }
}
