import { useEffect, useState } from "react"
import { Nav } from "react-bootstrap";
import Navbarr from "../Navbarr";
import s1 from "../assets/s1.jpg"
import s2 from "../assets/s2.jpg"
import s3 from "../assets/s3.jpg"
import { useNavigate } from 'react-router-dom'

// Make  a component to show the stats! Thanks Joey

const Cart = ({ merch }) => {
    const [pics, setPics] = useState([])

    const navigate = useNavigate()
    useEffect(() => {
        const request = async () => {
            let req = await fetch(`http://127.0.0.1:3000/products/`)
            let res = await req.json()
            setPics(res)
            console.log(res)
        }
        request()
    }, [])

    return (
        <div>
            <Navbarr />
            <h2>Shopping Cart</h2>
      
            <button className="button-4" type="button" onClick={() => navigate('/thankyou')}>Checkout Now!</button>

          
        </div>
    );
};

export default Cart;