import React from 'react';
import Joint from '../Joint/Joint';
import './JointContainer.css';

const JointContainer = ({ city, joints }) => {
  if (joints.length > 0) {
    return (
      <h2 className='search-msg'>Which City?</h2>
    )
  } else {
    joints.map(joint => {
      return (
        <section className='container'>
          <h1>Joints in {}</h1>
          <Joint
          key={index}
          name={joint.name}
          address={joint.address}
          phone={joint.phone}
          />
        </section>
      )
    })
  }
}

export default JointContainer;
