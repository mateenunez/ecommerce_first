import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongoose";
import Product from '@/models/Product';

export async function GET(){
    const featuredProduct = '6590772264e1b8f33509239c';
    await connectDB();
    const product = await Product.findById(featuredProduct)
    return NextResponse.json(product)
  
}

