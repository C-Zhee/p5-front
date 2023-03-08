import React from "react"
import { Nav } from "react-bootstrap";
import Navbarr from "../Navbarr";


// Make  a component to show the stats! Thanks Joey

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            <Navbarr />
            <h2>Shopping Cart</h2>
            {cart.map((item) => (
                    <div key={item.id}>
                    <p>{item.product_name}</p>
                    <p>${item.product_price}</p>
                    <p>Quantity: {item.product_quantity}</p>
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;