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

  mapJoints = (data) => {
    data.restaurants.map(place => {
      let spot = {
        id: place.restaurant.id,
        name: place.restaurant.name,
        address: `${place.restaurant.location.address}, ${place.restaurant.location.city}`,
        phone: place.restaurant.phone_numbers
      };
      this.setState({ joints: [...this.state.joints, spot] })
    });
  };

  displayJoints = () => {
    getJoints(this.cityID)
      .then(data => mapJoints(data))
      .catch(error => console.log('getJoints error'))
  }

  searchCity = (e) => {
    let id = String(data.location_suggestions[0].id);
    getCityID(this.state.city, this.state.stateUS)
      .then(data => this.setState({ cityID: id }))
      .then(data => displayJoints())
      .catch(error => console.log('getCityID error'))
  };

  render() {
    return (
      <body>
        <header>
          <h1>BBQ</h1>
          <nav className='link'>
            <Link to='/favorites' className='fav-link'>gotta have 'em</Link>
          </nav>
          <img />
        </header>
        <main>
          <SearchForm />
          <JointContainer joints={this.state.joints}/>
          <Route path='/favorites' render={() => <FavPage joints={this.state.favs} />} />
        </main>
      </body>
    )
  }
}

export default App;
