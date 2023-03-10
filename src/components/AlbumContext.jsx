import { createContext, useContext, useState } from 'react'


const AlbumContext = createContext()


const AlbumProvider = ({children }) => {

    const [favorites, setFavorites] = useState([])


    return (
        <AlbumContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </AlbumContext.Provider>
    )

}

export const useAlbumContext = () => {
    return useContext(AlbumContext)
}

export { AlbumProvider }