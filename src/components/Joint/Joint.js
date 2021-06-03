import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import FlameBlack from '../../images/flame-black.png';
import FlameOrange from '../../images/flame-orange.png';
import Rib from '../../images/rib.png';
import Plate from '../../images/plate.jpeg';
import Chicken from '../../images/chicken.jpeg';

import './Joint.scss';

const Joint = ({addFav, name, address, phone, pic}) => {
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
      passFav();
    } else {
      setIsFav(isFav = false);
    }
  }

  let passFav = () => {
    const newFav = {
      name: name,
      address: address,
      phone: phone
    };
    addFav(newFav);
  }

  return (
    <div className='joint'>
      <figure className='joint__img-container'>
        <img src={Plate} alt='Restaurant thumbnail' className='joint__img' />
      </figure>
      <div className='joint__like'>
        <i className='joint__like--icon icon-basic-star' />
      </div>
      <h4 className='joint__name'>Restaurant Name</h4>
      <div className='joint__address'>
        <i className='joint__address--icon icon-basic-geolocalize-01' />
        <p className='joint__address--text'>123 Street Rd. Nowhere 12345</p>
      </div>
      <div className='joint__phone '>
        <i className='joint__phone--icon icon-basic-smartphone' />
        <p className='joint__phone--text'>555 555 5555</p>
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
