import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import FavPage from './FavPage.js';

describe('FavPage', () => {
  it('should render with a message if there are no favorites', () => {
    const dumFavs = [];
    const dumUnFav = jest.fn();

    render(<FavPage favs={dumFavs} unFav={dumUnFav} />);

    expect(screen.getByText('Pick Some BBQ Joints You Gotta Have!')).toBeInTheDocument();
  });

  it('should render with a header if there are favorites', () => {
    const dumFavs = [{name: 'BBQ'}];
    const dumUnFav = jest.fn();

    render(<FavPage favs={dumFavs} unFav={dumUnFav} />);

    expect(screen.getByText('BBQ Joints You Gotta Have')).toBeInTheDocument();
  });
})
