import React from "react"
import { Nav } from "react-bootstrap";
import Navbarr from "../Navbarr";


// Make  a component to show the stats! Thanks Joey

const Cart = ({ cart, removeFromCart }) => {
    console.log('hey',cart)
    return (
        <div>
            <Navbarr />
            <h2>Shopping Cart</h2>
            <h3>hello</h3>
            {cart.map((item)=> {
                return(
                    <div key={item.id}>
                        <p>{item.product_name}</p>
                        <img src={item.product_image} width="500px" height="500px" />
                        <p>${item.product_price}</p>
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                        {/* hard code */}
                        <button>Buy Me Now</button>
                        <h1>Hello</h1>
                    </div>
                )
            })}
        </div>
    );
};

export default Cart;