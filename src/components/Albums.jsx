// import Navbarr from "../Navbarr";
// import React from "react";

// const Albums = ({albums}) => {

//     return (
//         <div>
//             <Navbarr />
//             {albums.map((album) => {
//                 return (
//                     <div>
//                         <img width="250px" height="300px" src={album.image} />
//                     </div>
//                 );
//             })}
//         </div>
//     )
// }

// export default Albums;

import Navbarr from "../Navbarr";
import React from "react";

const Albums = ({ albums }) => {
    return (
        <div>
            <Navbarr />
            {albums.map((album, index) => {
                return (
                    <div key={index}>
                        <img width="250px" height="300px" src={album.image} />
                    </div>
                );
            })}
        </div>
    );
};

export default Albums;