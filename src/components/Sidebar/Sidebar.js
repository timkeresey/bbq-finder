import React, { useState, useContext } from 'react';
import './Sidebar.scss';
import '../Favorites/Favorites.scss';
import Favorites from '../Favorites/Favorites.js';
import { FavoritesContext } from '../../App/App';
import {IconContext} from 'react-icons';
import { FaFireAlt } from 'react-icons/fa';

const Sidebar = () => {

    const {favorites} = useContext(FavoritesContext);
    const [checked, setChecked] = useState(false)

    const handleCheck = () => {
        setChecked(!checked);
    }

    return (
        <div className='sidebar'>
            <input
                type='checkbox'
                className={!checked ? 'sidebar__checkbox' : 'sidebar__checkbox active'}
                id='side-toggle'
                onClick={handleCheck}
                checked={checked}
            />
            <label for='side-toggle' className='sidebar__btn'>
                <span className='sidebar__icon'>&nbsp;</span>
            </label>
            <h3 className='sidebar__heading'>Your<br />Favs</h3>
            <div className='sidebar__background'>
                {favorites.length === 0 ?
                <div className='msg'>
                    {checked ?
                    <div className='pick'>
                        <IconContext.Provider value={{ className: 'pick__icon' }}>
                            <FaFireAlt />
                        </IconContext.Provider>
                        <h1 className='pick__text'>Pick some<br/>Favorites!</h1>
                    </div> :
                    <></>
                    }
                </div> :
                <div className='favorites'>
                    {checked ? <Favorites /> : <></>}
                </div>
                }
            </div>
        </div>
    )
}

export default Sidebar;
