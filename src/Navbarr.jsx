import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbarr.css'

import { Link } from 'react-router-dom'




const Navbarr = () => {

    const logout = () => {
        Cookies.remove('token')
        setUser(null)
    }

    <button onClick={logout}>logout</button>
    
    
    return (
        <div>
            <Navbar>
                    <Link to="/homepage">Home</Link>    
                    <Nav className="mr-auto" >
                        <Link to="/albums">Albums</Link> <br/>
                        <Link to="/bio">Bio</Link>
                        <Link to="/concert">Concert</Link>
                        {/* <Nav.Link href="/celebrate">🥳</Nav.Link> */}
                        <Nav.Link href="/merch">Merchandise</Nav.Link>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                    <Nav.Link href="/">Funny Button</Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    );
}

export default Navbarr;