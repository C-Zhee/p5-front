import React from "react";
import { Navigate } from "react-router-dom";
import Navbarr from "../Navbarr";

const MerchInfo = ({ merch, search, addToCart, likes, cart }) => {
    const merchFilter = merch.filter((merch) => {
        return merch.product_name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {merchFilter.map((merch) => {
                return (
                    <div key={merch.id} >
                        <p>{merch.product_name} </p>
                        <p>${merch.product_price}</p>
                        <p>Quantity: {merch.product_quantity}</p>
                         <img style={{border: "2px solid black"}} width="500px" height="500px" src={merch.product_image} />
                        <br />
                        <button onClick={() => {Navigate('/cart')}}>Add to cart!</button>
                    </div>
                );
            })}
                {/* <h1>hello</h1>
            {cart?.map((x)=> {
                return (
                    <div>
                        <div>lets test this</div>
                        {x.id}
                    </div>
                )
            })} */}         
        </div>
    );
}

export default MerchInfo;