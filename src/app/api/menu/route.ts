import { connectMongoDB } from "@/db/db";
import { type NextRequest, NextResponse } from "next/server";
import FoodItemModel from "@/db/models/foodItem/foodItem";
// import { currentUser } from '@clerk/nextjs';

export async function GET(req: NextRequest ) {
  try {
      // const user = await currentUser();
      // if(!user){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      //   return new Response("Unauthorized", { status: 401 });
      // }

      await connectMongoDB();

      const searchParams = req.nextUrl.searchParams;

      const search = searchParams.get('search');
      const category = searchParams.get('category');
      const sort = searchParams.get('sort');
      const isCombination = searchParams.get('isCombination');

      // Build the query object based on the provided parameters
      const query: any = {};

      if (search) {
        // Use a regular expression for partial matches
        query.name = new RegExp(search, 'i');
      }
      
      if (category) {
        query.category = category;
      }

      // Add a filter for isCombination
      if (isCombination) {
        query.isCombination = isCombination === 'true'; // Convert to boolean
      }

      // Execute the query with sorting
      const items = await FoodItemModel.find(query)
      .sort(sort ? { [sort as string]: 1 } : null)

      if (items.length === 0) {
          return NextResponse.json({ message: "No items found matching the criteria" }, { status: 404 });
      }
      
      return NextResponse.json({ items }, { status: 200 });
  } catch (error) {
      console.error("Error fetching menu items:", error);
      return NextResponse.json({ message: "Error fetching menu items" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    console.log("Submited menu items");
    const newItem = await req.json()
    console.log(newItem?.newItem);
    // Add item to database

    return NextResponse.json({message: "Menu items submitted successfully"}, {status: 200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({message: "Error posting menu items"}, {status: 500});
  }
}

