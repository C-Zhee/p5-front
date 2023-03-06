import React from 'react';
import Navbarr from '../Navbarr';
import Yerin from '../assets/Yerin.jpg'



const MerchInfo = ({ merch, search }) => {
    const merchFilter = merch.filter((merch) => {
        return (
            merch.product_name.toLowerCase().includes(search.toLowerCase())
        )
    })


    return (
        <div>
            {/* <Navbarr /> */}
            {merchFilter.map((merch) => {
                return (
                    <div key={merch.id} >
                        <p>{merch.product_name}</p>
                        <p>${merch.product_price}</p>
                        <p>Quantity: {merch.product_quantity}</p>
                        <img width="500px" height="500px" src={merch.product_image}/> <br/>
                        <button>Add to cart!</button>
                    </div>
                );
            })}

        </div>
    );
}

export default MerchInfo;