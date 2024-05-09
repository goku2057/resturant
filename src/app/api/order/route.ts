import { connectMongoDB } from "@/db/db";
import Order from "@/db/models/Order";

export async function GET (req: any) {
    await connectMongoDB();

    const email="1@gmail.com"

    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');
    if(_id){
        return Response.json(await Order.findById(_id));
    }

    return Response.json( await Order.find())
    
    // return Response.json( await Order.find({email}))
    
    // if(admin) {
    //     return Response.json(await Order.find())
    // }

    // if(email){
    //     return Response.json( await Order.find({email}))
    // }
}