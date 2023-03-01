import React from 'react';
import Navbarr from "../Navbarr";
import { useState, useEffect } from 'react'
import Albums from './Albums';


const Homepage = () => {

  const [albums, setAlbums] = useState([])

  useEffect(()=> {
    const request = async () => {
      let req = await fetch("http://127.0.0.1:3000/albums")
      let res = await req.json()
      setAlbums(res)
    }
    request()
  },[])


  return (
    <div>
      <Navbarr />
      {/* <Albums albums={albums}/> */}
    </div>
  );
}

export default Homepage;