"use client"
import Spinner from "@/components/Spinner";
import Link from "next/link"
import { useRouter } from "next/navigation";




function Products() { 

  const router = useRouter()
  let loading = false;

  const searchName = async (e) => {
    e.preventDefault()
    let i = 0;
    const name = e.target[0].value;
    const res = await fetch('/api/products')
    const data = await res.json()
    data.forEach(product => {
      if (product.name == name) {router.push(`/products/${product._id}`)} else i=i+1;
      
    })
    if (i==data.length) {alert("Producto inexistente")}
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    const id = e.target[0].value;
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    console.log(data.message)
    if (data?.message == "Order not found"){
      alert("Orden inexistente.")
    }
  }

  let classLi = "transition hover:scale-125 hover:delay-150";

  const openForm = () => {
    const div = document.getElementById("formName")
    
    div.innerHTML = `<form id="form"> 
    <h2>Que producto desea modificar?</h2>
    <input placeholder="Nombre de producto" name="name" type="text" id="inputName"/>
    <button type="submit" id="btnName">Buscar</button>
    </form>`;
    

    const form = document.getElementById("form")
    form.style = `display: flex; flex-direction: column; gap: 1rem; border: 1px solid white; border-radius: 1rem; padding: 10px; `;
    if (form) form.addEventListener("submit", (e) => searchName(e))
    
    const inputName = document.getElementById("inputName")
    inputName.style = `color: black`
  }
  

  const deleteForm = () => {
    const div = document.getElementById("formName")
    
    div.innerHTML = `<form id="form"> 
    <h2>Que producto desea eliminar?</h2>
    <input placeholder="ID De producto" name="id" type="text" id="inputId"/>
    <button type="submit" id="btnId">Buscar</button>
    </form>`;
    

    const form = document.getElementById("form")
    form.style = `display: flex; flex-direction: column; gap: 1rem; border: 1px solid white; border-radius: 1rem; padding: 10px; `;
    if (form) form.addEventListener("submit", (e) => handleDelete(e))
    
    const inputId = document.getElementById("inputId")
    inputId.style = `color: black`
  }

  return (
    <div className="h-screen">
      <div className="flex flex-row justify-evenly p-10 max-sm:flex-wrap max-sm:justify-start">
      <div className="flex flex-col gap-5 list-disc ">
      <h1 className="text-xl semi-bold">Funciones basicas para productos</h1>
      <Link href={"/products/new"}><li className={classLi}>Agregar producto </li></Link>
      <li className={classLi} onClick={deleteForm}>Eliminar producto </li>
      <li className={classLi} onClick={openForm}>Modificar producto </li>
      <div id="formName" className="p-5 border-white rounded-sm flex flex-col align-middle gap-5">
        
      </div>
      </div>
      <div  className="flex flex-col gap-5 list-disc">
      <h1 className="text-xl semi-bold"> Otras funciones </h1>
      <li className={classLi}>Suspender producto </li>
      <li className={classLi}>Modificar informacion de stock</li>
      <Link href={'/products/list'}><li className={classLi}>Buscar en stock</li></Link>
      </div>
      </div>
    </div>
  )
}

export default Products