import React, { useContext } from 'react';
import './Favorites.scss';
import Joint from '../Joint/Joint';
import { FavoritesContext } from '../../App/App';
import Plate from '../../images/plate.jpeg';

const Favorites = () => {

    const {favorites, setFavorites} = useContext(FavoritesContext);

    return (
        <>
        <Joint 
            key={'123'}
            name={'BBQ House'}
            address={'123 Street St. Denver 12345'}
            phone={'(555) 555-5555'}
            image={Plate}
        />
        </>
    )
}

export default Favorites;
