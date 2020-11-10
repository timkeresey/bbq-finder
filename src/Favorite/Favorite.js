import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlameOrange from '../images/flame-orange.png';
import Rib from '../images/rib.png';
import './Favorite.css';

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      address: props.address,
      phone: props.phone
    }
  }

  render() {
    return (
      <div className='fav-card'>
        <img src={Rib} alt='rib'/>
        <article className='info'>
          <p className='name'>{this.state.name}</p>
          <p className='address'>{this.state.address}</p>
          <p className='phone'>{this.state.phone}</p>
        </article>
        <button className='flame-icon' onClick={() => this.props.unFav(this.state.phone)} >
          <img src={FlameOrange} alt='unfavorite' />
        </button>
      </div>
    )
  }
}

export default Favorite;

Favorite.propTypes = {
  unFav: PropTypes.func,
  name: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string
}
