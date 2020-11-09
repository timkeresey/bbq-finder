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
  };

  searchCity = (city, stateUS) => {
    let cityID
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
      <body>
        <Route exact path='/'>
          <header>
            <h1>BBQ</h1>
            <nav className='link'>
              <Link to='/favorites' className='fav-link'>gotta have 'em</Link>
            </nav>
          </header>
          <main>
            <SearchForm searchCity={this.searchCity} />
            <JointContainer
            addFav={this.addFav}
            joints={this.state.joints}/>
          </main>
        </Route>
        <Route path='/favorites' render={() => <
          FavPage
          favs={this.state.favs}
          unFav={this.unFav}
          />} />
      </body>
    )
  }
}

export default App;
