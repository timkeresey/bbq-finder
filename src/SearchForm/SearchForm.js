import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      stateUS: ''
    }
  }

  render() {
    return (
      <form className='search-form'>
        <label htmlFor='city'>City</label>
        <input
        className='search'
        id='city'
        value={}
        onChange={}
        />
        <label htmlFor='stateUS'>State</label>
        <input
        className='search'
        id='stateUS'
        value={}
        onChange={}
        />
        <input type="submit" value="Search"/> 
      </form>
    )
  }
}
