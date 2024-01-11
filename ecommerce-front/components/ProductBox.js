
import React, {useContext} from 'react'
import styled from 'styled-components'
import {StyledImage} from "./Featured"
import PrimaryBtn from './PrimaryBtn';
import {ShoppingCart} from "@styled-icons/entypo/ShoppingCart";
import {CartContext} from "./CartContext"

export const Box = styled.div`
background-color: #ffff;
padding: 2rem;

@media screen and (max-width: 768px){
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;

  img{
    padding: 0;
  }
}

`;

const Title = styled.h3`
font-size: 1rem;
margin: 0;
padding-top: .5rem;

@media screen and (max-width: 768px){
  margin: 0;
  padding: 0;
}
`;

const Price = styled.h1`
margin: 0;
font-size: 1.5rem;
font-weight: bold;
`;

const urlImage = "/products.png";

const PriceRow = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
margin: 5px;

@media screen and (max-width: 768px){
  justify-content: normal;
}
`;

function ProductBox({product}) {
  const {addProducts} = useContext(CartContext)
  const addToCart = () => {
    addProducts(product._id)
  }

  return (
    <Box>
        <StyledImage src={urlImage} height={130} width={200} alt="This is a placeholder image"/>
        <Title>{product.name}</Title>
        <PriceRow>
            <Price>
                ${product.price}
            </Price>
            <PrimaryBtn id={product._id} readOnly={false}>
            <ShoppingCart/> 
            </PrimaryBtn>
        </PriceRow>
    </Box>
  )
}

export default ProductBox