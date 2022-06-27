import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react";
export const Cart = () => {
    const {handleChange} = useContext(CartContext);
    return (
        <div 
          style={{
              width: "200px",
              height: "300px",
              padding: "10px",
              backgroundColor: "teal"
          }}
        >
            <button 
              onClick={() => {
                  handleChange(1);
              }}
            >Add To Cart</button>
        </div>
    )
}