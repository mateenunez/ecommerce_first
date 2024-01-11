import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import Orders from "@/models/Order";

export async function GET(request){
    connectDB()
    
    const allOrders = await Orders.find()
    return NextResponse.json( allOrders )

}

