import React from 'react';
import './Header.scss';

import SearchForm from '../SearchForm/SearchForm';

const Header = () => {

    return (
        <header className="header">
           <h3 className="header__title">BBQ Finder</h3>
           <h1 className="header__text">Let's find you some BBQ</h1>
           <SearchForm /> 
        </header>
    )
}

export default Header;
