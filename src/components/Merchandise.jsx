import Navbarr from "../Navbarr";
import React, { useState, useEffect } from "react";
import MerchInfo from "./MerchInfo";
import MerchSearch from "./MerchSearch";
import Cart from "./Cart";
import './Merchandise'

const Merchandise = ({cart, setCart, merch, addToCart, likes}) => {
    
    const [search, setSearch] = useState("");


    return (
        <div className="img" >
            <Navbarr />
            <MerchSearch search={search} setSearch={setSearch} />
            <MerchInfo merch={merch} search={search} addToCart={addToCart} likes={likes} cart={cart}/>
        </div>
    );
};

export default Merchandise;