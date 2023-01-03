import React, { createContext, useState } from "react";

export const providerContext = createContext();


const StateContext = ({ children }) => {
    let [cart, setCart ]=useState(false);
    let [cartData, setCartData ]=useState({});

    let cartClose = ()=>{
        setCart(cart=false)
    }
    let cartOpen = ()=>{
        setCart(cart= true)
    }
return (
    <providerContext.Provider value={{
      cart,
      setCart,
      cartClose,
      cartOpen,
      cartData,
      setCartData
    }}>
      {children}
    </providerContext.Provider>
  )
}
export default StateContext