import React, { useState } from 'react';
import { useAlbumContext } from './AlbumContext';

const AlbumInfo = ({ albums, search, newAlbum, removeAlbum, setAlbumList }) => {
    // const [favorite, setfavorite] = useState([]);

    const { favorites, setFavorites } = useAlbumContext()


    const albumFilter = albums.filter((album) => {
        return album.release_date.toLowerCase().includes(search.toLowerCase());
    });

    //     // setAlbumList((prevState) => {
    //     //     return [...prevState, album]
    //     // })

        
    const favoriteButton = (album) => {
        if (favorites.includes(album.id)) {
            setFavorites(favorites.filter((id) => id !== album.id));
        } else {
            setFavorites([...favorites, album.id]);
        }
    };

    // const favoriteButton = (album) => {
    //     if (favorites.includes(album.album_id)) {
    //         setFavorites(favorites.filter((id) => id !== album.album_id));
    //     } else {
    //         setFavorites([...favorites, album.album_id]);
    //     }
    // };
   
    return (
        <div className="album-container">
            {albumFilter.map((album) => {

                const isFavorite = favorites.includes(album.id);

                return (
                    
                    <div className="album-wrapper" key={album.id}>
                        <div className="album">
                            <img
                                className="album-image"
                                src={album.album_image}
                                alt="Album Cover"
                            />
                            <div className="album-text">
                                <p>Album Name: {album.album_name}</p>
                                <p>Album Release Date: {album.release_date}</p>
                            </div>
                        </div>
                        <div className="favorite-button-wrapper">
                            <button
                                className={`favorite-button ${isFavorite ? 'active' : ''}`}
                                onClick={() => favoriteButton(album)}
                            >
                                {isFavorite ? '💜' : '♡'}
                            </button>
                        </div>

                        <button onClick={() => { newAlbum(album) }}>New Album</button>
                        <button onClick={() => { removeAlbum(album) }}>Remove Album</button>
                    </div>
                // Where do I put this?? :]
                );
            })}
        </div>
    );
};

export default AlbumInfo;

// import React from 'react';

// const AlbumInfo = ({ albums, search, favorite, favoriteButton }) => {
//     const albumFilter = albums.filter((album) => {
//         return album.release_date.toLowerCase().includes(search.toLowerCase());
//     });

//     return (
//         <div className="album-container">
//             {albumFilter.map((album) => {
//                 const isFavorite = favorite.includes(album.id);

//                 return (
//                     <div className="album-wrapper" key={album.id}>
//                         <div className="album">
//                             <img
//                                 className="album-image"
//                                 src={album.album_image}
//                                 alt="Album Cover"
//                             />
//                             <div className="album-text">
//                                 <p>Album Name: {album.album_name}</p>
//                                 <p>Album Release Date: {album.release_date}</p>
//                             </div>
//                         </div>
//                         <div className="favorite-button-wrapper">
//                             <button
//                                 className={`favorite-button ${isFavorite ? '' : ''}`}
//                                 onClick={() => favoriteButton(album.id)}
//                             >
//                                 {isFavorite ? '💜' : '♡'}
//                             </button>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default AlbumInfo;