import React from 'react'


const MerchSearch = ({ search, setSearch }) => {

    return (
        <div >
            <form id="form">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search 😎"
                />
            </form>
        </div>
    )
}


export default MerchSearch