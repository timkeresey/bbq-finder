import React, { Component } from 'react';
import './Favorite.css';

class Favorite extends Component {
  constructor({ name, address, phone }) {
    super({ name, address, phone });
    this.state = {
      name: '',
      address: '',
      phone: ''
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
        <button className='flame-icon' >
          <img src='src/images/flame-orange.png' />
        </button>
      </div>
    )
  }
}

export default Favorite;
