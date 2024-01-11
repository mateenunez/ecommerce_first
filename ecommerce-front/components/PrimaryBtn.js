
import React, {useContext} from 'react';
import styled, { css } from 'styled-components';
import { CartContext } from './CartContext';
import { useRouter } from 'next/navigation';


const StyledBtn = styled.button`
background-color: #a4b1c9;
border: 0;
color: #ffff;
padding: 5px 15px;
border-radius: 5px;
cursor: pointer;
margin: 10px;

svg{
  height:15px;
  width:15px;
  padding-top:4px;
}

${props => props.size === "l" && css`
padding: 10px 20px;
font-size: 1.1rem;

`}

${props => props.color === "white" && css`
background-color: #e1e1e1;
padding: 8px 18px;
color: #292929;
border: 1px solid black;
`}

${props => props.color === "black" && css`
background-color: #010001;
padding: 8px 18px;
color: #ffff;
border: 1px solid white;
margin: .5rem 0 0 0;

`}

${props => props.color === "red" && css`
background-color: #db5153;
color: #ffff;
padding: .5rem;

`}
`;

function PrimaryBtn({children, size, color, id, readOnly, type}) {

  const router = useRouter()
  const {addProducts, removeProducts} = useContext(CartContext)
  const addToCart = () => {
    if (!readOnly)
    addProducts(id);
  }
  const removeToCart = () => {
    if (!readOnly) {
      removeProducts(id);
    }
  }

  return (
        <StyledBtn size={size} color={color} onClick={(color != "red") ? (addToCart) : (removeToCart)} type={type}>
            {children}
        </StyledBtn>
  )
}

export default PrimaryBtn