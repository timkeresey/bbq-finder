import React, { Component } from 'react';
import './Joint.css';

class Joint extends Component {
  constructor({ name, address, phone }) {
    super({ name, address, phone });
    this.state = {
      name: '',
      address: '',
      city: '',
      phone: ''
    }
  }

  render() {
    return (
      <div className='card'>
        <img />
        <article className='info'>
          <p className='name'>{this.state.name}</p>
          <p className='address'>{this.state.address}, {this.state.city}</p>
          <p className='phone'>{this.state.phone}</p>
        </article>
        <button className='flame-icon' >
          <img src='src/images/flame-black.png' />
        </button>
      </div>
    )
  }
}

export default Joint;
//conditional render the icon img in method return
