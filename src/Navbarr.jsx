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
                        <Nav.Link href="/bio">Bio</Nav.Link>
                        <Nav.Link href="/albums">Albums</Nav.Link>
                        <Nav.Link href="/concert">Concert</Nav.Link>
                        {/* <Nav.Link href="/celebrate">🥳</Nav.Link> */}
                        <Nav.Link href="/merch">Merchandise</Nav.Link>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                    {/* <div class="btn-group">
                        <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Cart
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                             
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div> */}
                    <Nav.Link href="/">Funny Button</Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    );
}

export default Navbarr;