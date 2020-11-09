import React from 'react';
import Favorite from '../Favorite/Favorite';
import '/.FavPage.css';

const FavPage = ({ favs }) => {
  if(favs.length === 0){
    return (
      <h2 className='fav-msg'>Pick Some Joints You Gotta Have!</h2>
    )
  } else {
    favs.map(fav => {
      return (
        <section className='page'>
          <h1>Joints You Gotta Have</h1>
          <Favorite
          key={index}
          name={fav.name}
          address={fav.address}
          phone={fav.phone}
          />
        </section>
      )
    })
  }

}

export default FavPage;
