"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from "styled-components"
import {Box} from "../../components/ProductBox"
import Center from "../../components/Center"
import Input from "../../components/Input"
import PrimaryBtn from "../../components/PrimaryBtn"
import {CartContext} from "../../components/CartContext"
import {Delete} from "@styled-icons/fluentui-system-filled/Delete"
import FormBtn from "../../components/FormBtn"
import { useRouter } from 'next/navigation'




const Wrapper = styled.div`
display:grid;
grid-template-columns: 1.3fr 0.7fr;
gap: 40px;
padding-top: 1rem;

@media screen and (max-width: 768px){
  grid-template-columns: 1fr;
  padding-top: 3rem;
  padding-left: 5rem;
  div{
    height: auto;
  }
}

`;

const Tags = styled.h3`
color: #71606e;
font-size: 0.8rem;
padding: 10px;
`;

const ProductColumn = styled.div`
border: 2px solid #f0f0f0;
border-radius: 10px;
display: flex;
flex-direction: column;
gap: none;

`;

const ProductText = styled.h3`
color: #292929;
font-weight: bold;
font-size: 1rem;
margin: .8rem;
`;

const NoProductsText = styled.h2`
color: #292929;
font-weight: normal;
`;

const Required = styled.h4`
color: #292929;
font-weight: light;
font-size: .6rem;
`;

function Cart() {

  
  const {cartProducts, clearProducts} = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState({
    clientName: "",
    clientAdress: "",
    clientAdressHeight: "",
    clientDepartment: ""
  })

  let size = useRef(cartProducts?.length);
  let render = useRef(false);
  const router = useRouter()


  const getProducts = async (id) => {
    const res = await fetch(`/api/cart/${id}`)
    const data = await res.json()
    return data

  }

  const fillArray = async () => {
    cartProducts.forEach(async (id) => {
      const product = await getProducts(id)
      setTotal(total => total + product.price)
      setProducts(array => [...array, product]);
    })
  }


  useEffect(()=>{
    if (cartProducts?.length > 0 && render.current == false) {
    render.current = true;
    fillArray()
    } else if (cartProducts?.length < size.current){
      setProducts([])
      setTotal(0)
      fillArray()
    }
  }, [cartProducts])

  const handleInput = (e) => {
    //e.preventDefault()
    setOrder({...order, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newOrder = {
      order: order,
    products: products,
    total: total
    }
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json"
      }
    })
    //console.log(res.json())
    clearProducts()
    router.push("/products")
    

  }

  return (
    <Center> 
      {(!cartProducts?.length) ? (<Wrapper><Box><NoProductsText>No hay productos en tu carrito.</NoProductsText></Box></Wrapper>) : (
        <Wrapper>
        <Box>
          {(products) ? (<div>
            <h2>Tu carrito de compras: </h2>
            <Wrapper>
              <Tags>PRODUCTO</Tags>
              <Tags>PRECIO </Tags>
              </Wrapper>
            {products.map(product => (
              <Wrapper key={product._id}>
                <ProductColumn>
                <ProductText>{product.name}</ProductText>
                <ProductText>{product.description}</ProductText>
                </ProductColumn>
              <div>
              <ProductText>${product.price}</ProductText>
              <PrimaryBtn color="red" id={product._id} readOnly={false}><Delete/></PrimaryBtn>
              </div>
              </Wrapper>
            ))}
            <Wrapper>
              <Tags>TOTAL: ${total}</Tags>
              <Tags></Tags>
            </Wrapper>
            
          </div>) : (<div>
            
          </div>)}
        </Box>
        <Box>
          <h1>Completa los siguientes campos:</h1>
          <form onSubmit={handleSubmit}>
          <Required>*REQUERIDO</Required>
            <Input type="text" name="clientName" placeholder='Nombre completo' onInput={e => handleInput(e)}/>
           <Required>*REQUERIDO</Required>
            <Input type="text" name="clientAdress" placeholder='Direccion' onInput={e => handleInput(e)}/>
            <Required>*REQUERIDO</Required>
            <Input type="number" name="clientAdressHeight" placeholder='Altura ' onInput={e => handleInput(e)}/>
            <Required></Required>
            <Input type="number" name="clientDepartment" placeholder='Departamento' onInput={e => handleInput(e)}/>
            <FormBtn type="submit">Siguiente</FormBtn>
          </form>
          
        </Box>
        </Wrapper>
      )}
    </Center>
  )
}

export default Cart