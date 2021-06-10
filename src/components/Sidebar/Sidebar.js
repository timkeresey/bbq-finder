import React, { useContext, useState } from 'react';
import './Sidebar.scss';
import '../Favorites/Favorites.scss';
import Favorites from '../Favorites/Favorites.js';
import { FavoritesContext } from '../../App/App';

const Sidebar = () => {

    const {favorites, setFavorites} = useContext(FavoritesContext);

    const [checked, setChecked] = useState(false)

    const handleCheck = () => {
        setChecked(!checked);
    }

    return (
        <div className='sidebar'>
            <input type='checkbox' className='sidebar__checkbox' id='side-toggle' onClick={handleCheck} checked={checked} />
            <label for='side-toggle' className='sidebar__btn'>
                <span className='sidebar__icon'>&nbsp;</span>
            </label>
            <h3 className='sidebar__heading'>Your Favs</h3>
            <div className='sidebar__background'>
                
            </div>
            <div className='favorites'>
                <Favorites />
            </div>

        </div>
    )
}

export default Sidebar;
