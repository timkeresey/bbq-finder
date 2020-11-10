import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Favorite from './Favorite.js';

describe('Favorite', () => {
  it('should render a favorite card', () => {
    const dumUnFav = jest.fn();
    const dumName = 'BBQ Town'
    const dumAddress = '123 N. South Street, Denver, CO';
    const dumPhone = '555-555-5555';

    render(
      <Favorite
      name={dumName}
      address={dumAddress}
      phone={dumPhone}
      unFav={dumUnFav}
      />
    );

    expect(screen.getByText('BBQ Town')).toBeInTheDocument();
    expect(screen.getByText('123 N. South Street, Denver, CO')).toBeInTheDocument();
    expect(screen.getByText('555-555-5555')).toBeInTheDocument();
    expect(screen.getByAltText('rib')).toBeInTheDocument();
    expect(screen.getByAltText('unfavorite')).toBeInTheDocument();
  });
  //clicking button should fire unfav method
})
