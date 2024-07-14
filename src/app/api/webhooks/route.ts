import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.text();
        const signature = headers().get("stripe-signature")

        if(!signature){
            return new Response('Invalid Signature', {status: 400});
        }

        //Verfiying that request actually come from stripe
    }
    catch(err){

    }
}