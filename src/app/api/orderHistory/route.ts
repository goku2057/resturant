import { connectMongoDB } from "@/db/db";
import Order from "@/db/models/Order";
import { currentUser } from '@clerk/nextjs';

export async function GET (req: any) {

    const user = await currentUser();
    if(!user){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        return new Response("Unauthorized", { status: 401 });
    }

    await connectMongoDB();

    const email="1@gmail.com"

    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');
    if(_id){
        return Response.json(await Order.findById(_id));
    }

    return Response.json( await Order.find())
    
    // if(admin) {
    //     return Response.json(await Order.find())
    // }

    // if(email){
    //     return Response.json( await Order.find({email}))
    // }
}