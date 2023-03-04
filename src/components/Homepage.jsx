import React from 'react';
import Navbarr from '../Navbarr';
import Yerin from '../assets/Yerin.jpg'


const Homepage = ({albums,search}) => {
 
  const albumFilter = albums.filter((album) => {
    return (
      album.release_date.toLowerCase().includes(search.toLowerCase())
    )
  })


  return (
    <div>
      {/* <Navbarr /> */}
      {albumFilter.map((album) => {
        return (
          <div key={album.id}>
            <img width="500px" height="500px" src={album.album_image} />
          </div>
        );
      })}
      <img  width="1900px" height="885px" src = {Yerin} />
   
    </div>
  );
}

export default Homepage;