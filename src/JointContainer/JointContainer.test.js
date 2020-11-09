import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JointContainer from './JointContainer.js';

describe('JointContainer', () => {
  it('should render the joint container with a message if there is no search yet', () => {
    const dumJoints = [];
    const dumAddFav = jest.fn();

    render(<JointContainer addFav={dumAddFav} joints={dumJoints}/>);

    expect(screen.getByText('Where Do You Wanna Get BBQ?')).toBeInTheDocument();
  });

  
})
