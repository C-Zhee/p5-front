import React from 'react';
import Navbarr from '../Navbarr';




const Homepage = ({user}) => {
 console.log(user)
  


  return (
    <div>
       <Navbarr /> 
        {user && <p>Hello, {user.user_name}</p>}
        {user && <p>You are {user.user_age} years old</p>}
        
    </div>
  );
}

export default Homepage;

