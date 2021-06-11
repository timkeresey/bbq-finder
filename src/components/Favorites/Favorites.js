import React, { useContext } from 'react';
import './Favorites.scss';
import Joint from '../Joint/Joint';
import { FavoritesContext } from '../../App/App';
import Plate from '../../images/plate.jpeg';

const Favorites = () => {

    const {favorites, setFavorites} = useContext(FavoritesContext);

    if (favorites.length === 0) {
        return (
          <h1>NOTHING</h1>
        )
        } else {
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
}

export default Favorites;
