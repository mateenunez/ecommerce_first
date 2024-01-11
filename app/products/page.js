"use client"
import React from 'react'
import Center from "../../components/Center"
import styled from "styled-components"
import {Box} from "../../components/ProductBox"

const Wrapper = styled.div`
display:grid;
grid-template-columns: 1.3fr 0.7fr;
gap: 40px;
padding-top: 1rem;

@media screen and (max-width: 768px) {
  padding: 4rem 2rem;
}

`;

const ProductText = styled.h3`
color: #292929;
font-weight: bold;
font-size: 1.5rem;
margin: .8rem;
`;

const DescriptionText = styled.h4`
color: #292929;
font-weight: bold;
font-size: 1rem;
margin: .8rem;
`;

function Products() {
  return (
    <div>
        <Center>
            <Wrapper>
            <Box>
                <ProductText>¡Gracias por tu compra!</ProductText>
                <DescriptionText>Te enviaremos un email con los detalles de la entrega.</DescriptionText>

            </Box>
            </Wrapper>
        </Center>

    </div>
  )
}

export default Products