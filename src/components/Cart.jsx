import React from "react"

const Cart = ({merch, search}) => {
    const merchFilter = merch.filter((merch) => {
        return (
            merch.product_name.toLowerCase().includes(search.toLowerCase())
        )
    })
// Make  a component to show the stats! Thanks Joey

    return (
        <div>
            {merchFilter.map((merch) => {
                return (
                    <div key={merch.id} >
                        <p>{merch.product_name}</p>
                        <p>${merch.product_price}</p>
                        <img  width="250px" height="300px" src={merch.product_image} />
                    </div>
                );
            })}
        </div>
    )
}

export default Cart;