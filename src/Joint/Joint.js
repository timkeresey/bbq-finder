import React, { Component } from 'react';
import FlameBlack from '../images/flame-black.png';
import FlameOrange from '../images/flame-orange.png';

import './Joint.css';

class Joint extends Component {
  constructor({ name, address, phone }) {
    super({ name, address, phone });
    this.state = {
      name: name,
      address: address,
      phone: phone,
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
        <img />
        <article className='info'>
          <p className='name'>{this.state.name}</p>
          <p className='address'>{this.state.address}</p>
          <p className='phone'>{this.state.phone}</p>
        </article>
        <button className='flame-icon' onClick={() => this.toggleFav()}>
        {!this.state.isFav
          ? <img src={FlameBlack} alt='favorite'/>
          : <img src={FlameOrange} alt='favorite'/>}
        </button>
      </div>
    )
  }
}

export default Joint;
//conditional render the icon img in method return
