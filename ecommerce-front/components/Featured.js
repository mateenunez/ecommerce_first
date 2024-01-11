import React, { useContext } from 'react'
import Center from './Center'
import styled from 'styled-components'
import Image from 'next/image';
import PrimaryBtn from './PrimaryBtn';



const Background = styled.div`
background-color: #e1e1e1;
color: #0000;
padding: 1rem 0;

@media screen and (max-width: 768px){
  padding: 4rem 0;
}
`;

const Title = styled.h1`
margin: 0;
font-weight: bold;
color: #292929;
padding-top:2rem;
`;

const Description = styled.p`
color: #000;
font-size: 0.7rem;

`;

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 4rem;

@media screen and (max-width: 768px){
  width: 100%;
}

`;

export const StyledImage = styled(Image)`
border-radius: 10px;

@media screen and (max-width: 768px){
  width: 200px;
  height: 200px;
  padding: 5rem 0;
}
`



function Featured({product}) {
  
  return (
    <div>
        
    <Background>
        <Center>
            <Wrapper>
                <div><Title>{(product) ? (product.name) : ("Un nuevo producto se acerca: ")}</Title>
                     <Description>Sunt minim adipisicing deserunt qui et amet sint ullamco ut aliqua. Dolore ullamco commodo qui labore proident id. Ullamco excepteur in ea nisi veniam fugiat cillum qui do. Cillum qui tempor ea occaecat id occaecat incididunt sit amet pariatur quis. Laboris esse adipisicing mollit veniam ex ea ullamco qui qui ipsum reprehenderit. Excepteur anim ad nostrud officia. Tempor anim eiusmod qui ullamco qui.</Description>
                      <PrimaryBtn color="white" readOnly={true}>Leer mas</PrimaryBtn>
                      <PrimaryBtn size="l" id={product?._id} readOnly={false}>Agregar al carrito</PrimaryBtn>
                </div>
                <div>
                <StyledImage src={"/featured.png"} alt='Product IA Generated for design.' width={340} height={300} priority={true}/>
                </div>
            </Wrapper>

        </Center>
    </Background>

    </div>
  )
}

export default Featured