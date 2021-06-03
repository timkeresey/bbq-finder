import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm';
import JointContainer from '../components/JointContainer/JointContainer';
import FavPage from '../components/FavPage/FavPage';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Video from '../components/Video/Video';
import './App.scss';
import '../components/JointContainer/JointContainer.scss'
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
  // const [city, setCity] = useState('');
  // const [stateUS, setStateUS] = useState('');
  // const [cityID, setCityID] = useState('');

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
      <div className='container'>
        
          <Header
            searchCity={searchCity}
          />

          <Sidebar />
          
          <section className='joints'>
            <JointContainer joints={joints} />
          </section>
          

      </div>
    )
  
}

export default App;

// <Route path='/favorites' render={() => <FavPage />} />
// <nav className='link'>
//    <Link to='/favorites' className='fav-link'>Favorite Spots</Link>
// </nav>
