import React from 'react';
import Joint from '../Joint/Joint';
import './JointContainer.css';

const JointContainer = ({ city, joints }) => {
  if (0 === 0) {
    return (
      <h2 className='search-msg'>Where Are You Looking For BBQ?</h2>
    )
  } else {
    joints.map(joint => {
      return (
        <section className='container'>
          <h1>Joints in {}</h1>
          <Joint
          key={Date.now()}
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
