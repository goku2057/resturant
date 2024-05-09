import { connectMongoDB } from '../../../db/db';
import {NextResponse} from 'next/server'
import User from '../../../db/models/user';
import bcrypt from 'bcrypt';

export async function POST(req: any){
    try {
        const {name, email, password} = await req.json();
        const hasedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB();
        await User.create({name, email, password: hasedPassword});

        return NextResponse.json({message: "User is registered"}, {status: 201});

    } catch (error) {
        return NextResponse.json({message: "Failed to registerd the user."}, {status: 500});
    }
}