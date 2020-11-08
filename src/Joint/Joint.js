import React, { Component } from 'react';
import './Joint.css';

class Joint extends Component {
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
      <div className='card'>
        <img />
        <article className='info'>
          <p className='name'>{}</p>
          <p className='address'>{}</p>
          <p className='phone'>{}</p>
        </article>
        <button className='flame-icon' onClick={() => }>
          <img src='src/images/flame-black.png' />
        </button>
      </div>
    )
  }
}
//conditional render the icon img in method return
