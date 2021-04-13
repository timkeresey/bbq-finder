import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import FlameBlack from '../images/flame-black.png';
import FlameOrange from '../images/flame-orange.png';
import Rib from '../images/rib.png';

import './Joint.css';

const Joint = ({name, address, phone, pic}) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: props.name,
  //     address: props.address,
  //     phone: props.phone,
  //     isFav: false
  //   }
  // }

  let [isFav, setIsFav] = useState(false);

  const toggleFav = () => {
    if (isFav === false) {
      setIsFav(isFav = true);
    } else {
      setIsFav(isFav = false);
    }
  }

  // passFav = () => {
  //   const newFav = this.state;
  //   this.props.addFav(newFav);
  // }

  return (
    <div className='card'>
      {
      pic ?
      <img src={pic} alt='restaurant'/> :
      <img src={Rib} alt='rib' />
      }
      <article className='info'>
        <p className='name'>{name}</p>
        <p className='address'>{address}</p>
        <p className='phone'>{phone}</p>
      </article>
      <button className='flame-icon' onClick={() => toggleFav()} >
      {
      isFav === false
        ? <img src={FlameBlack} alt='favorite'/>
        : <img src={FlameOrange} alt='unfavorite'/>
      }
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
