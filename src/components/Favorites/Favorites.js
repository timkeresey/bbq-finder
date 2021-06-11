import React, { useContext } from 'react';
import './Favorites.scss';
import Joint from '../Joint/Joint';
import { FavoritesContext } from '../../App/App';

const Favorites = () => {

    const {favorites} = useContext(FavoritesContext);

    return favorites.map(joint => {
      return (
        <Joint 
          favorited={true}
          id={joint.id}
          key={joint.id}
          name={joint.name}
          address={joint.address}
          phone={joint.phone}
          image={joint.image}
        />
      )
    })
}

export default Favorites;
