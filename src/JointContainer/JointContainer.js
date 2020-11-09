import React from 'react';
import Joint from '../Joint/Joint';
import './JointContainer.css';

const JointContainer = ({ joints }) => {
  if (joints.length === 0) {
    return (
      <h2 className='search-msg'>Where Are You Looking For BBQ?</h2>
    )
  } else {
    return joints.map(joint => {
      return (
        <section className='container'>
          <h1>Joints in {joint.restaurant.location.city}</h1>
          <Joint
          key={joint.restaurant.id}
          name={joint.restaurant.name}
          address={joint.restaurant.location.address} city={joint.restaurant.location.city}
          phone={joint.restaurant.phone_numbers}
          />
        </section>
      )
    })
  }
}

export default JointContainer;
