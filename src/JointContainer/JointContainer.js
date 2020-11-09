import React from 'react';
import PropTypes from 'prop-types';
import Joint from '../Joint/Joint';
import './JointContainer.css';

const JointContainer = ({ joints, addFav }) => {
  if (joints.length === 0) {
    return (
      <h2 className='search-msg'>Where Do You Wanna Get BBQ?</h2>
    )
  } else {
    return joints.map(joint => {
      return (
        <section className='container'>
          <Joint
          key={joint.restaurant.id}
          addFav={addFav}
          name={joint.restaurant.name}
          address={joint.restaurant.location.address}
          phone={joint.restaurant.phone_numbers}
          />
        </section>
      )
    })
  }
}

export default JointContainer;

JointContainer.propTypes = {
  joints: PropTypes.array,
  addFav: PropTypes.func
}
