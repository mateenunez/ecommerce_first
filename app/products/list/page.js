"use client"
import Spinner from '@/components/Spinner';
import React, { useEffect, useRef } from 'react'

const getAllProducts = async () => {
    const res = await fetch("/api/products/list")
    return await res.json();
}

const showProduct = (product) => {
    const div = document.createElement('div')
    div.className="rounded overflow-hidden shadow-lg p-2 m-2 flex flex-col text-black bg-white"
    
    div.innerHTML = `<h1 style="font-size: 1rem; font-weight: bold; margin-bottom: 30px;">${product.name}</h1>
    <p style="color: rgb(75 85 99); margin-bottom: 20px; ">${product.description}</p>
    <div style="display: flex; justify-content: space-between; padding-bottom: 2rem;">
    <h3 style="background-color: rgb(59 130 246); width:70px; height:30px; display: inline-block; text-align:center; padding: 0px 5px 0 0; border-radius: 10%">#${product.stock}</h3>
    <h3 style="background-color: rgb(59 130 246); width:70px; height:30px; display: inline-block; text-align:center; padding: 0px 5px 0 0; border-radius: 10%"> $${product.price}</h3>
    </div>
    <h3 style="color: rgb(209 213 219); align-text:center; padding: 0 10px 0 10px">${product._id}</h3>
    `
    return div
}

function List() {
    
    
    
    const allProducts = getAllProducts();
    
    let render = useRef(false)

    useEffect(() => {
    
    if (!render.current){
    
    allProducts.then((products) => {
        let div = document.getElementById('productList');
        div.innerHTML = "";
        products.forEach(product => {
            div.append(showProduct(product))
        })
    })
    render.current = true;
    }

    }, [allProducts])


    // Posibles mejoras: busqueda por filtros (nombre, descripcion, id), formulario con todos los datos y que en cada cambio busque.
    // ordenar de mayor a menor segun precios o stock
    
  return (
    <div className='h-screen w-screen p-6'>

        <h1 className='p-3 text-2xl font-bold tracking-tight text-black'>Lista de productos actuales: </h1> 
        <div id='productList' className='flex flex-row'>
        <Spinner/>
        </div>

    </div>
  )
}

export default List