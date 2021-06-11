import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

import SearchForm from '../SearchForm/SearchForm';

const Header = ({ searchCity }) => {

    return (
        <header className="header">
           <h3 className="header__title">BBQ Finder</h3>
           <h1 className="header__text">Let's get some BBQ!</h1>
           <SearchForm searchCity={searchCity} /> 
        </header>
    )
}

export default Header;

Header.propTypes = {
    searchCity: PropTypes.func
}
