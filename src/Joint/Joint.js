import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlameBlack from '../images/flame-black.png';
import FlameOrange from '../images/flame-orange.png';
import Rib from '../images/rib.png';

import './Joint.css';

class Joint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      address: props.address,
      phone: props.phone,
      isFav: false
    }
  }

  toggleFav = () => {
    if(!this.state.isFav) {
      this.passFav();
    };
    this.setState(state => ({
      isFav: !state.isFav
    }));
  }

  passFav = () => {
    const newFav = this.state;
    this.props.addFav(newFav);
  }

  render() {
    return (
      <div className='card'>
        <img src={Rib} alt='rib'/>
        <article className='info'>
          <p className='name'>{this.state.name}</p>
          <p className='address'>{this.state.address}</p>
          <p className='phone'>{this.state.phone}</p>
        </article>
        <button className='flame-icon' onClick={() => this.toggleFav()}>
        {!this.state.isFav
          ? <img src={FlameBlack} alt='favorite'/>
          : <img src={FlameOrange} alt='unfavorite'/>}
        </button>
      </div>
    )
  }
}

export default Joint;

Joint.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  addFav: PropTypes.func
}
