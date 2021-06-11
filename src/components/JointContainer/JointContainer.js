import React from 'react';
import PropTypes from 'prop-types';
import Joint from '../Joint/Joint';
import './JointContainer.scss';

const JointContainer = ({ joints }) => {

  return joints.map(joint => {
    return (
      <Joint 
        favorited={false}
        id={joint.restaurant.id}
        key={joint.restaurant.id}
        name={joint.restaurant.name}
        address={joint.restaurant.location.address}
        phone={joint.restaurant.phone_numbers}
        image={joint.restaurant.featured_image}
      />
    )
  })
}

export default JointContainer;

JointContainer.propTypes = {
  joints: PropTypes.array
}
