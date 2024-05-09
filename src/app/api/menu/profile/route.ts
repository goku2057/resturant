import { connectMongoDB } from "@/db/db";
// import {getServerSession} from 'next-auth'
import UserInfo from "@/db/models/userInfo";
import User from "@/db/models/user";

import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs';

// import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST() {
    try {
        await connectMongoDB();
        // const session = await getServerSession(authOptions);
        // const email = session?.user?.email;

        // if(email === null) return Response.json({msg: 'Login first'})

        // const existingUser = await UserInfo.findOne({ email });

        // if(existingUser){
        //     return Response.json({ msg: 'User already exists', admin: existingUser.admin });
        // } else {
        //     await UserInfo.create({ email, admin: false });
        //     return Response.json({ msg: 'Successfully added admin', admin: false  });
        // }
        return Response.json({msg: 'Success'})
    } catch (error: any) {
        console.log("error ", error.message)
        return Response.json({msg: 'Failed to add admin'})
    }
}

export async function GET() {
    try {
        const user = await currentUser();
        
        if(!user){
            return new Response("Unauthorized", { status: 401 });
        }
        const data = { message: user.emailAddresses[0].verification?.status };

        return NextResponse.json({ data });
    } catch (error) {
        return Response.json({msg: 'Failed to get userInfo'})
    }
}