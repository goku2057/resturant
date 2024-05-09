import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs';
 
export async function GET() {
  try {
      const user = await currentUser();
      
      if(!user){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
          return new Response("Unauthorized", { status: 401 });
      }
      
      const data = { message: user};

      return NextResponse.json({ data });
  } catch (error) {
      return Response.json({msg: 'Failed to get userInfo'})
  }
}