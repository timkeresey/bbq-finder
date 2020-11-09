import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlameOrange from '../images/flame-orange.png';
import './Favorite.css';

class Favorite extends Component {
  constructor({ name, address, phone }) {
    super({ name, address, phone });
    this.state = {
      name: name,
      address: address,
      phone: phone
    }
  }

  render() {
    return (
      <div className='fav-card'>
        <img />
        <article className='info'>
          <p className='name'>{this.state.name}</p>
          <p className='address'>{this.state.address}</p>
          <p className='phone'>{this.state.phone}</p>
        </article>
        <button className='flame-icon' onClick={() => this.props.unFav(this.state.phone)} >
          <img src={FlameOrange} alt='favorites' />
        </button>
      </div>
    )
  }
}

export default Favorite;
