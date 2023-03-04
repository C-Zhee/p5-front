import Navbarr from "../Navbarr";
import React from "react";
import { useState, useEffect } from 'react'
import Cart from "./Cart";
import MerchSearch from "./MerchSearch";
// import Navbarr from "../Navbarr";

const Merchandise = () => {

const [merch, setMerch] = useState([])
const [search, setSearch] = useState('')

    useEffect(() => {
        const request = async () => {
            let req = await fetch("http://127.0.0.1:3000/products")
            let res = await req.json()
            console.log(res)
            setMerch(res)
        }
        request()
    }, [])

    return (
        <div>
            <Navbarr />
            <MerchSearch search={search} setSearch={setSearch}/>
            <Cart merch={merch} search={search} />

        </div>
    )
}

export default Merchandise;