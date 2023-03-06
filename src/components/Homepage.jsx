import React from 'react';
import Navbarr from '../Navbarr';
import Yerin from '../assets/Yerin.jpg'



const Homepage = ({user}) => {
 
  


  return (
    <div>
       <Navbarr /> 
        {user && <p>Hello, {user.first_name}</p>}
   
    </div>
  );
}

export default Homepage;

