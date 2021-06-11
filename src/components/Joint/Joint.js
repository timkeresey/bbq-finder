import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import {IconContext} from 'react-icons';

import { FavoritesContext } from '../../App/App';
import { FaPhone, FaMapMarkerAlt, FaFireAlt, FaCheck } from 'react-icons/fa';
import { BiSquareRounded } from 'react-icons/bi';
import Plate from '../../images/plate.jpeg';

import './Joint.scss';

const Joint = ({favorited, name, address, phone, image}) => {
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
  let [check, setCheck] = useState(false);

  const {favorites, setFavorites} = useContext(FavoritesContext);

  const toggleFav = (e) => {
    let target = {name: name, address: address, phone: phone, image: image};
    if (isFav === true) {
      setIsFav(false);
      setFavorites(favorites.filter(item => item.name !== name));
    } else if (isFav === false) {
      setIsFav(true);
      setFavorites([...favorites, target]);
    }
  }

  return (
    <div className='joint'>
      <figure className='joint__img-container'>
        { image === "" ?
          <img src={Plate} alt='Restaurant thumbnail' className='joint__img' /> :
          <img src={image} alt='Restaurant thumbnail' className='joint__img' />
        }
      </figure>
      { !favorited ?
      <button type='button' className='joint__like' onClick={e => toggleFav(e)}>
        { isFav === false ?
          <IconContext.Provider value={{ className: 'joint__like--icon-false' }}>
            <FaFireAlt />
          </IconContext.Provider> :
          <IconContext.Provider value={{ className: 'joint__like--icon-true' }}>
            <FaFireAlt />
          </IconContext.Provider>
        }
      </button> :
      <div className='joint__check'>
        <h4 className='joint__check--text'>Did you have it?</h4>
        <button className='joint__check--btn'>
        {!check ?
        <IconContext.Provider value={{ className: 'joint__check--icon-false' }}>
          <BiSquareRounded />
        </IconContext.Provider> :
        <IconContext.Provider value={{ className: 'joint__check--icon-true' }}>
          <FaCheck />
        </IconContext.Provider>
        }
        </button>       
      </div>
      }
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
