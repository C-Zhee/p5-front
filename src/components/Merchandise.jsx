import Navbarr from "../Navbarr";
import React, { useState, useEffect } from "react";
import MerchInfo from "./MerchInfo";
import MerchSearch from "./MerchSearch";
import Cart from "./Cart";

const Merchandise = () => {
    const [merch, setMerch] = useState([]);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const request = async () => {
            let req = await fetch("http://127.0.0.1:3000/products");
            let res = await req.json();
            console.log(res);
            setMerch(res);
        };
        request();
    }, []);

    const addToCart = (product) => {
        if (cart.includes(product)) return;
        setCart([...cart, product]);
    };

    const removeFromCart = (product) => {
        setCart(cart.filter((item) => item !== product));
    };

    return (
        <div>
            <Navbarr />
            <MerchSearch search={search} setSearch={setSearch} />
            <MerchInfo merch={merch} search={search} addToCart={addToCart} />
            <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
    );
};

export default Merchandise;