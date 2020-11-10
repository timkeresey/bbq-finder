import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import JointContainer from '../JointContainer/JointContainer';
import FavPage from '../FavPage/FavPage';
import './App.css';
import { getCityID, getJoints } from '../apiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      stateUS: '',
      cityID: '',
      joints: [],
      favs: []
    }
  }

  setJoints = (cityID) => {
    getJoints(cityID)
      .then(data => this.setState({ joints: data.restaurants }))
      .catch(error => error => this.setState({error: error.message}))
  };

  searchCity = (city, stateUS) => {
    getCityID(city, stateUS)
    .then(data => this.setJoints(data.location_suggestions[0].id))
    .catch(error => error => this.setState({error: error.message}))
  };

  addFav = (newFav) => {
    this.setState({ favs: [...this.state.favs, newFav] });
  }

  unFav = (phone) => {
    const favUpdate = this.state.favs.filter(fav => {
      return fav.phone !== phone
    });
    this.setState({ favs: favUpdate });
  }

  render() {
    return (
      <main className='main-section'>
        <Route exact path='/'>
          <header >
            <h1 className='title'>Find Some BBQ</h1>
          </header>
          <section>
            <SearchForm searchCity={this.searchCity} />
            <nav className='link'>
              <Link to='/favorites' className='fav-link'>Spots to get to</Link>
            </nav>
            <JointContainer
            addFav={this.addFav}
            joints={this.state.joints}/>
          </section>
        </Route>
        <Route path='/favorites' render={() =>
          <FavPage
          favs={this.state.favs}
          unFav={this.unFav}
          />} />
      </main>
    )
  }
}

export default App;
