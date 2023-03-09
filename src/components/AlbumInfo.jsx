import React, { useState } from 'react';


const AlbumInfo = ({ albums, search, newAlbum, removeAlbum }) => {
    const [favorite, setfavorite] = useState([]);

    const albumFilter = albums.filter((album) => {
        return album.release_date.toLowerCase().includes(search.toLowerCase());
    });

    const favoriteButton = (albumId) => {
        if (favorite.includes(albumId)) {
            setfavorite(favorite.filter((id) => id !== albumId));
        } else {
            setfavorite([...favorite, albumId]);
        }
    };
   
    return (
        <div className="album-container">
            {albumFilter.map((album) => {
                console.log(album.id)

                const isFavorite = favorite.includes(album.id);

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
                                onClick={() => favoriteButton(album.id)}
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