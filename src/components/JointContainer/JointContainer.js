import React from 'react';
import PropTypes from 'prop-types';
import Joint from '../Joint/Joint';
import './JointContainer.scss';

const JointContainer = ({ joints, addFav }) => {

  return (
    <div className='joints'>
      JOINTS
    </div>
  )
  // if (joints.length === 0) {
  //   return (
      
  //   )
  // } else {
  //   return joints.map(joint => {
  //     return (
  //       <section key={joint.restaurant.id} data-testid= 'joint-section' className='container'>
  //         <Joint
  //         addFav={addFav}
  //         name={joint.restaurant.name}
  //         address={joint.restaurant.location.address}
  //         phone={joint.restaurant.phone_numbers}
  //         pic={joint.restaurant.featured_image}
  //         />
  //       </section>
  //     )
  //   })
  // }
}

export default JointContainer;

JointContainer.propTypes = {
  joints: PropTypes.array,
  addFav: PropTypes.func
}
