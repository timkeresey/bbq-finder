import React, { useContext } from 'react';
import './Favorites.scss';
import Joint from '../Joint/Joint';
import { FavoritesContext } from '../../App/App';
import {IconContext} from 'react-icons';
import { FaFireAlt } from 'react-icons/fa';
import Plate from '../../images/plate.jpeg';

const Favorites = () => {

    const {favorites, setFavorites} = useContext(FavoritesContext);

    if (favorites.length === 0) {
        return (
          <div className='pick'>
            <h1 className='pick__text'>Pick some Favorites!</h1>
            <IconContext.Provider value={{ className: 'pick__icon' }}>
              <FaFireAlt />
            </IconContext.Provider>
          </div>
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
