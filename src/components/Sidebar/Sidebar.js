import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <input type='checkbox' className='sidebar__checkbox' id='side-toggle'/>
            <label for='side-toggle' className='sidebar__btn'>
                <span className='sidebar__icon'>&nbsp;</span>
            </label>
            <h3 className='sidebar__heading'>Your Favs</h3>
            <div className='sidebar__background'>
                &nbsp;
            </div>

        </div>
    )
}

export default Sidebar;
