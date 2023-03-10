import Navbarr from "../Navbarr";
import React from "react";
import { useState, useEffect } from 'react'
import AlbumInfo from "./AlbumInfo";
import AlbumSearch from "./MerchSearch";
import Homepage from "./Homepage";

// import Yerin from '../assets/Yerin.jpg'

const Albums = ({ setAlbumList }) => {

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

    const newAlbum = (album) => {
        fetch("http://127.0.0.1:3000/albums", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(album)
        })
            .then(res => res.json())
            .then(newAlbum => {
                setAlbums([...albums, newAlbum])
            })
            .catch(error => console.error(error))
    }
    
    // const removeAlbum = async (album) => {
    //     let req = await fetch(`http://127.0.0.1:3000/albums/${album.id}`, {
    //         method: "DELETE",
    //     })
    //     setAlbums(album.filter(x => x.id !== unit.id))
    // }



    const removeAlbum = (album) => {
        console.log(album)
        fetch(`http://127.0.0.1:3000/albums/${album.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    // remove the deleted album from the state
                    setAlbums(albums.filter(a => a.id !== album.id))
                    console.log('Item deleted successfully.');
                } else {
                    throw new Error('Failed to delete item.');
                }
            })
            .catch(error => {
                console.error('Error:', error);

            });
    }

    return (
        <div>
        
            <Navbarr />
            <AlbumSearch search={search} setSearch={setSearch}/>
            <AlbumInfo albums={albums} search={search} newAlbum={newAlbum} removeAlbum={removeAlbum} setAlbumList={setAlbumList}/>
          
        </div>
    )
}

export default Albums;

