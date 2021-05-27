import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <h3 className='sidebar__heading'>Your Favs</h3>
            <input type='checkbox' className='sidebar__checkbox' id='side-toggle'/>
            <label for='side-toggle' className='sidebar__btn'>
                <span className='sidebar__icon'>&nbsp;</span>
            </label>

        </div>
    )
}

export default Sidebar;
