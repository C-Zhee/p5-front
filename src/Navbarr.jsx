import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbarr.css'



const Navbarr = () => {

    const logout = () => {
        Cookies.remove('token')
        setUser(null)
    }

    <button onClick={logout}>logout</button>
    
    
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="/homepage">Home</Navbar.Brand>
                    <Nav className="mr-auto" >
                        <Nav.Link href="/albums">Albums</Nav.Link>
                        <Nav.Link href="/bio">Bio</Nav.Link>
                        <Nav.Link href="/merch">Merchandise</Nav.Link>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        <Nav.Link href="/celebrate">🥳</Nav.Link>
                    <Nav.Link href="/">🐌</Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    );
}

export default Navbarr;