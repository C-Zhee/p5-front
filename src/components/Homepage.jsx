import React, { useState } from 'react';
import Navbarr from '../Navbarr';
import './Homepage.css';
import { useAlbumContext } from './AlbumContext';

const Homepage = ({ user, albumList }) => {
  console.log(albumList)
  const [profilePicture, setProfilePicture] = useState(null);
  const { favorites } = useAlbumContext()
  
  //console.log(favorites)

 

  function handleFileInputChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // console.log(profilePicture);
  }

  console.log(favorites)

  return (
    <div>
      <Navbarr />
      {user && <h1 className="user-age">Hello, {user.first_name} {user.last_name}</h1>}
      {user && <h1 className="user-age">Username: {user.user_name}</h1>}
      {user && <h1 className="user-age">Age: {user.user_age}</h1>}
      {user && <h1 className="user-age">Email: {user.email}</h1>}

      {favorites.map((album)=>{
        
        console.log(album)
  
        return (
          <div>
            <h1>Album Id: {album}</h1>
            {/* <img src={album.album_image} alt="image" /> */}
          </div>
        )
      })}
     
    
      {profilePicture ? (
        <div className="profile-picture-container">
          <img src={profilePicture} alt="Profile Picture" className="profile-picture" />
        </div>
      ) : (
        <div></div>
      )}
      <form onSubmit={handleSubmit} className="hehe">
        <input type="file" onChange={handleFileInputChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Homepage;