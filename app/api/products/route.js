import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import Product from "@/models/Product";


export async function POST(request){
    connectDB()
    try {
        const data = await request.json()
    const newProduct = new Product(data)
    const savedProduct = newProduct.save()
    return NextResponse.json(savedProduct)

    } catch (error) {
        if (error instanceof Error){
            return NextResponse.json(error.message)
        }
    }
}

export async function GET(request){
    connectDB()
    
    const allProducts = await Product.find()
    return NextResponse.json( allProducts )

}
