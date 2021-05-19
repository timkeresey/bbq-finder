import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Joint from './Joint.js';

describe('Joint', () => {
  it('should render a joint card', () => {
    const dumAddFav = jest.fn();
    const dumName = 'BBQ Town'
    const dumAddress = '123 N. South Street, Denver, CO';
    const dumPhone = '555-555-5555';

    render(
      <Joint
      addFav={dumAddFav}
      name={dumName}
      address={dumAddress}
      phone={dumPhone}
      />
    );

    expect(screen.getByText('BBQ Town')).toBeInTheDocument();
    expect(screen.getByText('123 N. South Street, Denver, CO')).toBeInTheDocument();
    expect(screen.getByText('555-555-5555')).toBeInTheDocument();
    expect(screen.getByAltText('rib')).toBeInTheDocument();
    expect(screen.getByAltText('favorite')).toBeInTheDocument();
  });

  it('should fire the toggleFav method once when favorite button is clicked', () => {

    const dumAddFav = jest.fn();
    const dumName = 'BBQ Town'
    const dumAddress = '123 N. South Street, Denver, CO';
    const dumPhone = '555-555-5555';

    render(
      <Joint
      addFav={dumAddFav}
      name={dumName}
      address={dumAddress}
      phone={dumPhone}
      />
    );

    userEvent.click(screen.getByAltText('favorite'));
    expect(dumAddFav).toHaveBeenCalledTimes(1);
  });
})
