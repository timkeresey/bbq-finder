import React, { Component } from 'react';
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

      // let spot = {
      //   id: place.restaurant.id,
      //   name: place.restaurant.name,
      //   address: `${place.restaurant.location.address}, ${place.restaurant.location.city}`,
      //   phone: place.restaurant.phone_numbers
      // };

  };

  searchCity = (city, stateUS) => {
    let cityID
    getCityID(city, stateUS)
    .then(data => this.setJoints(data.location_suggestions[0].id))
    .catch(error => error => this.setState({error: error.message}))
  };
  //display error message in catch

  render() {
    return (
      <body>
        <header>
          <h1>BBQ</h1>
          <nav className='link'>
            <Link to='/favorites' className='fav-link'>gotta have 'em</Link>
          </nav>

        </header>
        <main>
          <SearchForm searchCity={this.searchCity}

          />
          <JointContainer joints={this.state.joints}/>
          <Route path='/favorites' render={() => <FavPage joints={this.state.favs} />} />
        </main>
      </body>
    )
  }
}

export default App;
