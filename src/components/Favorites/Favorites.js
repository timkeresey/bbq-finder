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
                key={joint.address}
                name={joint.name}
                address={joint.address}
                phone={joint.phone_numbers}
                image={joint.image}
              />
            )
          })
        }
}

export default Favorites;
