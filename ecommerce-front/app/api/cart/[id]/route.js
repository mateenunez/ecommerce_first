import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongoose";
import Product from '@/models/Product';


export async function GET(request, {params}){
    await connectDB();
    const product = await Product.findById(params.id)
    if (product) { return NextResponse.json(product) } 
    else { return NextResponse.json({message: "Error al obtener todos los productos"})}
  
}
