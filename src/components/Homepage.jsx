import React, { useState } from 'react';
import Navbarr from '../Navbarr';
import './Homepage.css';


const Homepage = ({ user }) => {
  console.log(user)
  const [profilePicture, setProfilePicture] = useState(null);

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

    console.log(profilePicture);
  }


  return (
    <div>
      <Navbarr />
      {user && <h1 className="user-age">Hello, {user.first_name} {user.last_name}</h1>}
      {user && <h1 className="user-age">Username: {user.user_name}</h1>}
      {user && <h1 className="user-age">Age: {user.user_age}</h1>}
      {user && <h1 className="user-age">Email: {user.email}</h1>}
     
    
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