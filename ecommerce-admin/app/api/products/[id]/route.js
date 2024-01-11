import { NextResponse } from "next/server";
import Product from "@/models/Product";
import { connectDB } from "@/lib/mongoose";

export async function GET(request, {params}){
    connectDB()

    const product = await Product.findById(params.id)
    if (product) return NextResponse.json(product); else return NextResponse({message: "Producto inexistente."})
}

export async function PUT(request, {params}){
    connectDB()

    const data = await request.json()
    const productUpdated = await Product.findByIdAndUpdate(params.id, data, {new: true})
    return NextResponse.json(productUpdated)
}

export async function DELETE(request, {params}){
    connectDB()

    const productDeleted = await Product.findByIdAndDelete(params.id)
    console.log(productDeleted)
    return NextResponse.json(productDeleted)

}