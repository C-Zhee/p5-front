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
                    <div key={merch.id} > <br/>
                        <h2>{merch.product_name} </h2> <br/>
                        <h2>${merch.product_price}</h2> <br/>
                        <h2>Quantity: {merch.product_quantity}</h2> <br/ >
                         <img style={{border: "2px solid black"}} width="500px" height="500px" src={merch.product_image} /> <br/ >
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