import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import Product from "@/models/Product";


export async function GET(request){
    connectDB()
    
    const allProducts = await Product.find()
    return NextResponse.json( allProducts )

}
