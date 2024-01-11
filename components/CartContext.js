"use client"

const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext({});

export default function CartContextProvider ({children}){

    const [cartProducts, setCartProducts] = useState([]);
   

    function addProducts(productId){
        setCartProducts(prev => [...prev, productId])
    }

    function removeProducts(productId){
        setCartProducts(prev => {
            const pos = prev.indexOf(productId)
            if (pos !== -1){
                return prev.filter((value,index) => index !== pos)
            }
            
            return prev
        })
    }

    function clearProducts(){
        setCartProducts([])
    }

    useEffect(() => {
        const ls = typeof window !== undefined ? window.localStorage : null;
        console.log(cartProducts?.length)
        if (cartProducts?.length > 0){
            ls.setItem("cart", JSON.stringify(cartProducts))
            
        }

    },[cartProducts])

    useEffect(()=>{
        const ls = typeof window !== undefined ? window.localStorage : null;
        if (ls && ls.getItem("cart")){
            setCartProducts(JSON.parse(ls.getItem("cart")))
        }
    }, [])

    return (
        <CartContext.Provider value={{cartProducts, setCartProducts, addProducts, removeProducts, clearProducts}}> {children} </CartContext.Provider>
    )
}