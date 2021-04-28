import React, { useState, useEffect, useContextonent } from 'react';
import PropTypes from 'prop-types';
import FlameOrange from '../images/flame-orange.png';
import Rib from '../images/rib.png';
import './Favorite.scss';

// This whole component can be removed and FavPage can display just display joints in whish isFavorite is true.
const Favorite = ({name, address, phone}) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: props.name,
  //     address: props.address,
  //     phone: props.phone
  //   }
  // }

  

  return (
    <div className='fav-card'>
      <img src={Rib} alt='rib'/>
      <article className='info'>
        <p className='name'>{name}</p>
        <p className='address'>{address}</p>
        <p className='phone'>{phone}</p>
      </article>
      <button className='flame-icon'  >
        <img src={FlameOrange} alt='unfavorite' />
      </button>
    </div>
  )
}

export default Favorite;

Favorite.propTypes = {
  unFav: PropTypes.func,
  name: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string
}
