import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import FlameBlack from '../images/flame-black.png';
import FlameOrange from '../images/flame-orange.png';
import Rib from '../images/rib.png';

import './Joint.css';

const Joint = ({name, address, phone}) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: props.name,
  //     address: props.address,
  //     phone: props.phone,
  //     isFav: false
  //   }
  // }

  const [isFav, setIsFav] = useState(false);

  // toggleFav = () => {
  //   if(!this.state.isFav) {
  //     this.passFav();
  //   };
  //   this.setState(state => ({
  //     isFav: !state.isFav
  //   }));
  // }

  // passFav = () => {
  //   const newFav = this.state;
  //   this.props.addFav(newFav);
  // }
  

  return (
    <div className='card'>
      <img src={Rib} alt='rib'/>
      <article className='info'>
        <p className='name'>{name}</p>
        <p className='address'>{address}</p>
        <p className='phone'>{phone}</p>
      </article>
      <button className='flame-icon' >
      {isFav === false
        ? <img src={FlameBlack} alt='favorite'/>
        : <img src={FlameOrange} alt='unfavorite'/>}
      </button>
    </div>
  )
  
}

export default Joint;

Joint.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  addFav: PropTypes.func
}
