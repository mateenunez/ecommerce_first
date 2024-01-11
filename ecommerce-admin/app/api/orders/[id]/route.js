import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import Orders from "@/models/Order";

export async function DELETE(request, {params}){
    
    try {
        connectDB()
    const order = await Orders.findByIdAndDelete(params.id)
    console.log(order)
    return NextResponse.json({message: "Order delete successed"})

    } catch (error) {
        if (error instanceof Error) {
            console.log(error)
            return NextResponse.json({message: "Order not found"})
        }   
    }

}