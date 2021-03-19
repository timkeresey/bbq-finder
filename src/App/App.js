import React, { useState, useEffect, useContextonent } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import JointContainer from '../JointContainer/JointContainer';
import FavPage from '../FavPage/FavPage';
import './App.css';
import { getCityID, getJoints } from '../apiCalls.js';

const App = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     city: '',
  //     stateUS: '',
  //     cityID: '',
  //     joints: [],
  //     favs: []
  //   }
  // }

  let [joints, setJoints] = useState([]);
  const [city, setCity] = useState('');
  const [stateUS, setStateUS] = useState('');
  const [cityID, setCityID] = useState('');

  const displayJoints = (cityID) => {
    getJoints(cityID)
      .then(data => setJoints(joints = data.restaurants))
      .catch(error => console.log(error))
  };

  const searchCity = (city, stateUS) => {
    getCityID(city, stateUS)
    .then(data => displayJoints(data.location_suggestions[0].id))
    .catch(error => console.log(error))
  };

  // const addFav = (newFav) => {
  //   this.setState({ favs: [...this.state.favs, newFav] });
  // }

  // const unFav = (phone) => {
  //   const favUpdate = this.state.favs.filter(fav => {
  //     return fav.phone !== phone
  //   });
  //   this.setState({ favs: favUpdate });
  // }

 
    return (
      <main className='main-section'>
        <Route exact path='/'>
          <header >
            <h1 className='title'>Find Some BBQ</h1>
          </header>
          <section>
            <SearchForm searchCity={searchCity} />
            <nav className='link'>
              <Link to='/favorites' className='fav-link'>Favorite Spots</Link>
            </nav>
            <JointContainer
            
            joints={joints}/>
          </section>
        </Route>
        <Route path='/favorites' render={() =>
          <FavPage
          
          
          />} />
      </main>
    )
  
}

export default App;
