"use client"
import Featured from '@/components/Featured';
import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import NewProducts from '../components/NewProducts';


export const GlobalStyles = createGlobalStyle`
body{
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #a4b1c9;
}
`;

async function GetServerSideProps(){
const res = await fetch("/api/page");
const data = await res.json()
return data
}

async function GetNewProducts(){
  const res = await fetch("/api");
  const data = await res.json()
  return data
}

export default function Home() {
  const [product, setProduct] = useState();
  const promise = GetServerSideProps();
 

  const [allProducts, setAllProducts] = useState()
  const newProductsPromise = GetNewProducts();
  

  useEffect(() => {

    promise.then(prod => {
      setProduct(prod)
      
    })

    newProductsPromise.then(prods=> {
      let array = [];
      prods.forEach(prod => {
        if(prod._id != "6590772264e1b8f33509239c"){
          array.push(prod)
        }
      })
      setAllProducts(array)
    })
  
    
  }, [])
  

  return (
    <div>
      <Featured product={product}/>
      <NewProducts products={allProducts}/>
    </div>
   
  )
}


