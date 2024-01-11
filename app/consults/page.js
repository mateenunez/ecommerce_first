"use client"
import React, { useEffect, useRef } from 'react'
import Spinner from '@/components/Spinner';

const getAllOrders = async () => {
  const res = await fetch("/api/orders")
  return await res.json();
}

const createTableOrder = (order) => {
  const client = order.order[0]
  const products = order.products
  const price = order.total
  const table = document.createElement("tr")
  table.innerHTML = `
  <td><h4>${client.clientName}</h4><h4>${client.clientAdress}</h4><h4>${client.clientAdressHeight}</h4><h4>${client.clientDepartment}</h4></td>
      <td>${products.map(prod => (`<h4>${prod.name} / ${prod._id}</h4>`))}</td>
      <td><h4>$ ${price}</h4></td>
      <td><h4>${order._id}</h4></td>
      
  `;
  return table;
}

function Consults() {

  let render = useRef(false)

  const openForm = () => {
    let div = document.getElementById("completeForm")
    div.innerHTML = `
    <form id="form"> 
    <h2>Que orden desea completar?</h2>
    <input placeholder="ID De orden" name="id" type="text" id="inputId"/>
    <button type="submit" id="btnId">Buscar</button>
    </form>
    `;

    const form = document.getElementById("form")
    form.style = `display: flex; flex-direction: column; gap: 1rem; border: 1px solid white; border-radius: 1rem; padding: 10px; height: 50%; width: 30%;`;
    if (form) form.addEventListener("submit", async (e) => {const response = await handleComplete(e);
    alert(response.message)})
    
    const inputId = document.getElementById("inputId")
    inputId.style = `color: black`
  }

  const handleComplete = async (e) => {
    e.preventDefault()
    const id = e.target[0].value;
    const res = await fetch(`/api/orders/${id}`, {
      method: "DELETE"
    })
    const data = await res.json()
    return data
  }

  useEffect(()=>{
    if (!render.current){
    const allOrders = getAllOrders();
    allOrders.then(orders => {
    orders.forEach(order => {
      let table = document.getElementById("orderTable")
      table.append(createTableOrder(order))
    })
    })
    render.current = true;
    let div = document.getElementById("loading")
    div.innerHTML="";
    }
  })

  return (
    <div className='h-screen'>
        <h1 className='p-3 text-2xl font-bold tracking-tight text-black'>Lista de ordenes actuales: </h1> 
        <div id='loading'>
        <Spinner/>
        </div>
        

      <div className='m-5 h-screen'>
          <table class="table-auto border-indigo-500 border-2 w-full text-center" id='orderTable'>
        <thead className='border-indigo-500 border-2 w-full'>
          <tr>
            <th>CLIENTE</th>
            <th>PRODUCTOS (NOMBRE / ID)</th>
            <th>MONTO</th>
            <th>ORDER ID</th>
          </tr>
        </thead>
        <tbody className='text-center'>
        </tbody>
      </table>
      <div className='py-10 flex flex-col justify-between align-middle text-center gap-5 list-disc overflow-hidden'>
      <h1 className="text-xl semi-bold"> Funciones basicas para ordenes: </h1>
      <li className="transition hover:scale-125 hover:delay-150" onClick={openForm}>Marcar como completada</li>
      <div id="completeForm" className='flex justify-center'>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Consults