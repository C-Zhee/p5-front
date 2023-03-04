import Navbarr from "../Navbarr";
import React from "react";
import { useState, useEffect } from 'react'
import Homepage from "./Homepage";
import AlbumSearch from "./MerchSearch";


const Albums = () => {

const [albums, setAlbums] = useState([])
const [search, setSearch] = useState('')

    useEffect(() => {
        const request = async () => {
            let req = await fetch("http://127.0.0.1:3000/albums")
            let res = await req.json()
            console.log(res)
            setAlbums(res)
        }
        request()
    }, [])
    
    return (
        <div>
            <Navbarr />
            <AlbumSearch search={search} setSearch={setSearch}/>
            <Homepage albums={albums} search={search}/>
        </div>
    )
}

export default Albums;

