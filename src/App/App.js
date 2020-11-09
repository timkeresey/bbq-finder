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

  setJoints = () => {
    getJoints(this.cityID)
      .then(data => this.setState({ joints: [data.restaurants] }))
      .catch(error => console.log('getJoints error'))

      // let spot = {
      //   id: place.restaurant.id,
      //   name: place.restaurant.name,
      //   address: `${place.restaurant.location.address}, ${place.restaurant.location.city}`,
      //   phone: place.restaurant.phone_numbers
      // };

  };

  searchCity = (city, stateUS) => {
    getCityID(city, stateUS)
    .then(data => this.setState({
      cityID: data.location_suggestions[0].id
    }))
    .then(this.setJoints())
  };
  //display error message in catch
componentDidMount() {
  if(this.state.cityID) {
    getJoints(this.cityID)
      .then(data => this.setState({ joints: data.restaurant }))
      .catch(error => console.log('getJoints error'))
  }
}

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
