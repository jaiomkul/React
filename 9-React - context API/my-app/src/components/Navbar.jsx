import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { LangContext } from "../contexts/Language";

export const Navbar = () => {

    const {cart} = useContext(CartContext);
    const { lang } = useContext(LangContext);

    return (
        <nav 
          style={{
              display:"flex",
              justifyContent:"end",
              padding: "15px",
              fontSize: "28px",
              border: "1px solid red"
          }}
        >
            {lang === "en" ? "Cart" : "Thaila"}:{cart}
        </nav>
    );
};