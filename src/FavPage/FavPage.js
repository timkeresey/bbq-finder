import React from 'react';
import PropTypes from 'prop-types';
import Favorite from '../Favorite/Favorite';
import './FavPage.css';

const FavPage = ({ favs, unFav }) => {
  if(favs.length === 0){
    return (
      <h2 className='fav-msg'>Pick Some Joints You Gotta Have!</h2>
    )
  } else {
    const cards = favs.map(fav => {
      return (
        <div className='fav-card'>
          <Favorite
          key={Date.now()}
          name={fav.name}
          address={fav.address}
          phone={fav.phone}
          unFav={unFav}
          />
        </div>
      )
    });
    return (
      <section className='page'>
        <h1>Joints You Gotta Have</h1>
        <div className='fav-area'>{cards}</div>
      </section>
    )
  }

}

export default FavPage;
