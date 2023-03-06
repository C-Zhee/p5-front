import Navbarr from "../Navbarr";
import React from "react";
import { useState, useEffect } from 'react'
import AlbumInfo from "./AlbumInfo";
import AlbumSearch from "./MerchSearch";
import Homepage from "./Homepage";

// import Yerin from '../assets/Yerin.jpg'

const Albums = () => {

const [albums, setAlbums] = useState([])
const [search, setSearch] = useState('')
const [favorite, setfavorite] = useState([]);

    const favoriteButton = (albumId) => {
        if (favorite.includes(albumId)) {
            setfavorite(favorite.filter((id) => id !== albumId));
        } else {
            setfavorite([...favorite, albumId]);
        }
    };

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
        
            <Homepage />
            <AlbumSearch search={search} setSearch={setSearch}/>
            <AlbumInfo albums={albums} search={search} />
          
        </div>
    )
}

export default Albums;

// import Navbarr from "../Navbarr";
// import React from "react";
// import { useState, useEffect } from 'react'
// import AlbumInfo from "./AlbumInfo";
// import AlbumSearch from "./MerchSearch";
// import Homepage from "./Homepage";

// const Albums = () => {

//     const [albums, setAlbums] = useState([])
//     const [search, setSearch] = useState('')
//     const [favorite, setFavorite] = useState([]);

//     const favoriteButton = (albumId) => {
//         if (favorite.includes(albumId)) {
//             setFavorite(favorite.filter((id) => id !== albumId));
//         } else {
//             setFavorite([...favorite, albumId]);
//         }
//     };

//     useEffect(() => {
//         const request = async () => {
//             let req = await fetch("http://127.0.0.1:3000/albums")
//             let res = await req.json()
//             console.log(res)
//             setAlbums(res)
//         }
//         request()
//     }, [])

//     return (
//         <div>
//             {/* <Navbarr /> */}
//             <Homepage favorite={favorite}/>
//             <AlbumSearch search={search} setSearch={setSearch} />
//             <AlbumInfo albums={albums} search={search} favorite={favorite} favoriteButton={favoriteButton}
//             />
//         </div>
//     )
// }

// export default Albums;