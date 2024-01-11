import React from 'react'
import styled from 'styled-components'
import Center from './Center';
import ProductBox from './ProductBox';

const ProductsGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
color:black;
gap: 20px;
padding-top: 25px;
margin-bottom: 1rem;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 25px 0 0 3rem;
}


`;

function NewProducts({products}) {
    
  return (
    <Center>
        <ProductsGrid>
        {products?.length > 0 && products.map(product => (
            // eslint-disable-next-line react/jsx-key
            <ProductBox product={product}/>
        ))}
        </ProductsGrid>
    </Center>
)
}

export default NewProducts 
