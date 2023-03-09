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
            let req = await fetch(`http://127.0.0.1:3000/item/${merch.id}`)
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
            <h3>Hello, FlataJoey! Welcome to your shopping cart </h3>
            <img src={s1} width="500px" length="500px"/>
            <h1>Price: $30</h1>
            <img src={s2} width="500px" length="500px" />
            <h1>Price: $10</h1>
            <img src={s3} width="500px" length="500px" />
            <h1>Price: $20</h1> <br/>

            <h1>Total: $60</h1>
            <button className="button-4" type="button" onClick={() => navigate('/thankyou')}>Checkout Now!</button>

            {/* {Array.isArray(pics) && pics.length > 0 ? (
                pics.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src ={s1} />
                            <p>{item.product_name}</p>
                            <img src={item.product_image} width="500px" height="500px" />
                            <p>${item.product_price}</p>
                            <button>Buy Me Now</button>
                        </div>
                    )
                })
            ) : (
                <p>Loading...</p>
            )} */}
        </div>
    );
};

export default Cart;