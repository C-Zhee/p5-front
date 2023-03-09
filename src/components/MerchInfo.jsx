import React from "react";
import Navbarr from "../Navbarr";

const MerchInfo = ({ merch, search, addToCart, likes }) => {
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
                        <button onClick={() => {addToCart(merch)}}>Add to cart!{likes}</button>
                    </div>
                );
            })}

        </div>
    );
}

export default MerchInfo;