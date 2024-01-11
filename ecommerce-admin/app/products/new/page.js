
"use client"
import { useRouter, useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'

function NewProduct() {

  const router = useRouter()
  const params = useParams()
  const [newProduct, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: ""
  })

  const getProduct = async () => {
    
    const res = await fetch(`/api/products/${params.id}`)
    const product = await res.json()
    setProduct(product)
  }

  const handleChanges = (e) => {
    e.preventDefault();
    setProduct({... newProduct, [e.target.name]: e.target.value})
    
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!params.id){createProduct(e)
      router.push("/products")} else 
    {
      updateProduct(e)
      router.push("/products")
    }
    
  }

  const createProduct = async (e) => {
    const res = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(res)
  }

  const updateProduct = async (e) => {

    const res = await fetch(`/api/products/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(res)
  }


  useEffect(()=>{
    if (params.id) {
      getProduct()
    }
  }, [])

  return (
    <div className='h-screen w-screen flex items-center'>
        
    <div className='w-full h-full py-12 flex justify-center'>
        <form className='m-0 gap-6 border border-white h-fit rounded-sm ' onSubmit={handleSubmit}>
          <h1 className='p-5 text-lg '>{(params.id) ? (<>Modificar un producto: </>) : (<>Agregar un producto: </>)}</h1>
            <div className='flex flex-row gap-10 p-6'><h1>Nombre: </h1><input type='text' name='name' className='w-32 h-8 rounded-md text-black' onInput={handleChanges} placeholder={(params.id) ? (newProduct.name) : ('')}/></div>
            <div className='flex flex-row gap-10 p-6'><h1>Descripcion: </h1><textarea type='description' name='description' className='w-48 h-12 rounded-md text-black' onInput={handleChanges} placeholder={(params.id) ? (newProduct.description) : ('')}/></div>
            <div className='flex flex-row gap-10 p-6'><h1>Precio por unidad: </h1><input placeholder={(params.id) ? (newProduct.price) : ('     -ARS')} type='number' name='price' className='text-black w-32 h-8 rounded-md' onInput={handleChanges} /></div>
            <div className='flex flex-row gap-10 p-6 py-10'><h1>Unidades disponibles: </h1><input type='number' name='stock' className='w-32 h-8 rounded-md text-black' onInput={handleChanges} placeholder={(params.id) ? (newProduct.stock) : ('')}/></div>
        <button type='submit' className='py-3 px-2 bg-indigo-400 text-white text-sm rounded-t-lg w-full justify-self-center active:bg-indigo-500'> Aceptar </button>
        </form>

    </div>

    </div>
  )
}

export default NewProduct