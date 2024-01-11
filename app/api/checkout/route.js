import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongoose";
import Order from "@/models/Order";

export async function POST(request){
    
    try {
        connectDB()

        const data = await request.json()
        const newOrder = new Order(data)
        const savedOrder = newOrder.save()
        return NextResponse.json(savedOrder)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}