import { connectMongoDB } from "../../../db/db";
import User from "../../../db/models/user";
import { NextResponse } from "next/server";

export async function POST(req: any){
    try {
        await connectMongoDB();
        const { email } = await req.json();
        const user = await User.findOne({email}).select("_id");
        return NextResponse.json({user});
    } catch (error) {
        console.log(error);
    }
}