import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import SearchForm from './SearchForm.js';


describe('SearchForm', () => {
  it('should render a search form', () => {
    const dumSearchCity = jest.fn();

    render (<SearchForm searchCity={dumSearchCity} />);

    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('State')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
  //should update values on onChange
  //should fire search method when search button clicked
})
