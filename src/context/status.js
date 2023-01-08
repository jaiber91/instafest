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
    const [showComponent, setShowComponent] = useState(false);
    const [showCards, setShowCards] = useState(true);

    let [showCards1, setShowCards1] = useState(false);
    let [showCards2, setShowCards2] = useState(false);
    let [showCards3, setShowCards3] = useState(false);
    let [showCards4, setShowCards4] = useState(false);

    let [translatey, setTranslatey] = useState(Boolean);

    const stateCardShow1=()=>{
      setShowCards1(showCards1=true);
      setShowCards2(showCards2=false);
      setShowCards3(showCards3=false);
      setShowCards4(showCards4=false);
    };
    const stateCardShow2 =()=>{
      setShowCards1(showCards1=false)
      setShowCards2(showCards2=true)
      setShowCards3(showCards3=false)
      setShowCards4(showCards4=false)
    }
    const stateCardShow3 =()=>{
      setShowCards1(showCards1=false)
      setShowCards2(showCards2=false)
      setShowCards3(showCards3=true)
      setShowCards4(showCards4=false)
    }
    const stateCardShow4=()=>{
      setShowCards1(showCards1=false)
      setShowCards2(showCards2=false)
      setShowCards3(showCards3=false)
      setShowCards4(showCards4=true)
    }
    const handleCardClick = () => {
      setShowComponent(!showComponent);
      setShowCards(!showCards);
    };

    const handleClose = () => {
      setShowComponent(false);
      setShowCards(true);
    };

return (
    <providerContext.Provider value={{
      cart,
      setCart,
      cartClose,
      cartOpen,
      cartData,
      setCartData,
      showComponent,
      setShowComponent,
      showCards,
      setShowCards,
      handleCardClick,
      handleClose,
      showCards1,
      stateCardShow1,
      showCards2,
      stateCardShow2,
      showCards3,
      stateCardShow3,
      showCards4,
      stateCardShow4,
      setTranslatey,
      translatey
    }}>
      {children}
    </providerContext.Provider>
  )
}
export default StateContext