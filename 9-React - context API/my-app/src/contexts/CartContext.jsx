import { createContext, useState } from "react";
//import App from "../App"


export const CartContext = createContext(); // creates empty box;

export const CartContextProvider = ({ children}) => {
 
    const [cart, setCart] = useState(1);

    const handleChange = (inc) => {
        setCart(cart + inc);
    };

    return (
    <CartContext.Provider value={{cart, handleChange}}>
        {children}
    </CartContext.Provider>
    );
}

//Provider- Context Api
// Consumer-Cpmponent