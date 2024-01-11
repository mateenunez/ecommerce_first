"use client"
import Link from 'next/link';
import styled, {css} from 'styled-components';
import Center from './Center';
import {ShoppingCart} from "@styled-icons/entypo/ShoppingCart";
import {useContext, useState} from "react";
import { CartContext } from './CartContext';
import {Menu} from "@styled-icons/evaicons-solid/Menu"
import {Menu2} from "@styled-icons/evaicons-solid/Menu2"

const StyledHeader = styled.header`
background-color: #e1e1e1;
padding: 1rem;

@media screen and (max-width: 768px){
  height: 3rem;
  width:100%;
}

`;

const Logo = styled(Link)`
color: #292929;
text-decoration: none;
font-size: 1.5rem;

@media screen and (max-width: 768px){
  height: 2rem;
  font-size: 1rem;
}

`;

const NavLink = styled(Link)`
color:#292929;
text-decoration: none;
display: flex;
flex-direction: row;
svg{
  height:15px;
  width:15px;
  padding-top:4px;
}
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 20px;

@media screen and (max-width: 768px){
  justify-content: evenly;
  gap: 6rem;
  height: 2rem;
};

`;

const StyledNav = styled.nav`
display: flex;
gap: 1rem;
@media screen and (max-width: 768px){
  display:none
};
`;

const MobileNav = styled.nav`
display:none;
background-color: transparent;
@media screen and (max-width: 768px){
display:flex;
flex-direction: row;
gap:1rem;
height:2rem;
width:100vw;
margin: 0;
padding: 1rem;
}
`;

const StyledNavBtn = styled.button`
display:none;
@media screen and (max-width: 768px){
  svg{
    height:15px;
    width:15px;
    padding-top:4px;
  }
  display:flex;
  width: 200px;
  height: 100px;
  background-color:transparent;
  border:none
};
`;

function Header() {

  const {cartProducts} = useContext(CartContext)
  const [menu, setMenu] = useState(false)

  const menuChange = () => {
    if (menu){
      setMenu(false)
    } else setMenu(true)
  }

  return (
    
    <div>
        <StyledHeader>
            <Center>
              <Wrapper>
              <Logo href={"/"}>E-Commerce</Logo>
              <StyledNav>
                  <NavLink href={"/"}>Inicio</NavLink>
                  <NavLink href={"/products"}>Productos ({cartProducts?.length})</NavLink>
                  <NavLink href={"/account"}>Cuenta </NavLink>
                  <NavLink href={"/cart"}> 
                  <ShoppingCart/> 
                  </NavLink>
              </StyledNav>
              <StyledNavBtn onClick={menuChange}>
              {(menu) ? (<Menu2/>) : (<Menu/>)}
              </StyledNavBtn>
              </Wrapper>
              
              {(menu) ? (
                  <MobileNav>
                <NavLink href={"/"}>Inicio</NavLink>
                    <NavLink href={"/products"}>Productos ({cartProducts?.length})</NavLink>
                    <NavLink href={"/account"}>Cuenta </NavLink>
                    <NavLink href={"/cart"}> 
                    <ShoppingCart/> 
                    </NavLink>
                </MobileNav>
              ) : (<></>)}
              
            </Center>
        </StyledHeader>
    </div>
  )
}

export default Header