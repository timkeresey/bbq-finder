import React, { useState, createContext } from 'react';
import VideoLooper from 'react-video-looper';
import JointContainer from '../components/JointContainer/JointContainer';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Roast from '../images/roast.mp4';
import './App.scss';
import '../components/JointContainer/JointContainer.scss'
import { getCityID, getJoints } from '../apiCalls.js';


export const FavoritesContext = createContext(null);

const App = () => {

  let [joints, setJoints] = useState([]);
  let [favorites, setFavorites] = useState([])

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

    return (
      <div className='container'>
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>

          <Header searchCity={searchCity} />

          <Sidebar favorites={favorites} />
          
          {joints.length === 0 ?
          <div className='video'>
            <VideoLooper className='video__embed' source={Roast} start={0} end={4} />
            <h2 className='video__text'>Search for some BBQ!</h2>
          </div> :
          <section className='joints'>
            <JointContainer joints={joints} />
          </section>
          }

        </FavoritesContext.Provider> 

      </div>
    )
  
}

export default App;
