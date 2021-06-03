import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import {IconContext} from 'react-icons';

import {FaPhone, FaMapMarkerAlt, FaFireAlt} from 'react-icons/fa';
import Plate from '../../images/plate.jpeg';
import Chicken from '../../images/chicken.jpeg';

import './Joint.scss';

const Joint = ({name, address, phone, image}) => {
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

  // const toggleFav = () => {
  //   if (isFav === false) {
  //     setIsFav(isFav = true);
  //     passFav();
  //   } else {
  //     setIsFav(isFav = false);
  //   }
  // }

  // let passFav = () => {
  //   const newFav = {
  //     name: name,
  //     address: address,
  //     phone: phone
  //   };
  //   addFav(newFav);
  // }

  return (
    <div className='joint'>
      <figure className='joint__img-container'>
        { image === "" 
          ? <img src={Plate} alt='Restaurant thumbnail' className='joint__img' />
          : <img src={image} alt='Restaurant thumbnail' className='joint__img' />
        }
      </figure>
      <div className='joint__like'>
      <IconContext.Provider value={{ className: 'joint__like--icon' }}>
          <FaFireAlt />
        </IconContext.Provider>
      </div>
      <h4 className='joint__name'>{name}</h4>
      <div className='joint__address'>
        <IconContext.Provider value={{ className: 'joint__address--icon' }}>
          <FaMapMarkerAlt />
        </IconContext.Provider>
        <p className='joint__address--text'>{address}</p>
      </div>
      <div className='joint__phone '>
        <IconContext.Provider value={{ className: 'joint__phone--icon' }}>
          <FaPhone />
        </IconContext.Provider>
        <p className='joint__phone--text'>{phone}</p>
      </div>
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



{/* <div className='card'>
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
</div> */}
