import {OpenAI} from 'openai';
import {NextResponse} from 'next/server';
import { auth } from "@clerk/nextjs";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


export async function POST(
    req:Request
){
    try{
        const {userId}=auth()
        const body = await req.json()
        const {prompt,amount=1,resolution="512*512"}=body

        if(!userId){
            return new NextResponse("Unauthorized",{status:401});
        }
        if(!prompt){
            return new NextResponse("Unauthorized",{status:401});
        }
        if(!amount){
            return new NextResponse("Unauthorized",{status:401});
        }
        if(!resolution){
            return new NextResponse("Unauthorized",{status:401});
        }
    
        const response= await openai.images.generate({
          prompt,
          n:parseInt(amount,10),
          size:resolution
          });
          console.log(response)
        return NextResponse.json(response.data);
    }catch(error){
        console.log("[IMAGE_ERROR]",error);
        return new NextResponse("Internal error",{status:500});
    }
}
