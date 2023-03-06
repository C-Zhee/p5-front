import React from 'react'


const MerchSearch = ({ search, setSearch }) => {

    return (
        <div >
            <form id="form">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Hidden Search Bar "
                    style={{
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid gray",
                        boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
                        width: "250px",
                        fontSize: "16px"
                    }}
                />
            </form>
        </div>
    )
}


export default MerchSearch