import React, { useState } from 'react';
import Navbarr from '../Navbarr';

const Celebrate = () => {
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
            {profilePicture ? (
                <img src={profilePicture} alt="Profile Picture" />
            ) : (
                <div></div>
            )}
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileInputChange} />
            </form>
        </div>
    );
}

export default Celebrate;