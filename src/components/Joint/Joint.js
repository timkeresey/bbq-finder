import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import FlameBlack from '../../images/flame-black.png';
import FlameOrange from '../../images/flame-orange.png';
import Rib from '../../images/rib.png';

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
      <img src='../../images/plate.jpeg' alt='Restaurant thumbnail' className='joint__img' />
      <div className='joint__like'>
        <i className='joint__like--icon icon-basic-star'></i>
      </div>
      <h4 className='joint__name'>Restaurant Name</h4>
      <p className='joint__address'>123 Street Rd. Nowhere 12345</p>
      <p className='joint__phone'>555 555 5555</p>
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
