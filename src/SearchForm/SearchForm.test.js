import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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

  it('should update value of city input when user fills them in', () => {
    const dumSearchCity = jest.fn();

    render (<SearchForm searchCity={dumSearchCity} />);

    const city = screen.getByTestId('city-input');
    userEvent.type(city, 'Denver');
    expect(city).toHaveValue('Denver');
  });

  it('should update value of state input when user fills them in', () => {
    const dumSearchCity = jest.fn();

    render (<SearchForm searchCity={dumSearchCity} />);

    const state = screen.getByTestId('state-input');
    userEvent.type(state, 'CO');
    expect(state).toHaveValue('CO');
  });

  it('should fire city search method once when search button is clicked', () => {
    const dumSearchCity = jest.fn();

    render (<SearchForm searchCity={dumSearchCity} />);

    userEvent.click(screen.getByText('Search'));
    expect(dumSearchCity).toHaveBeenCalledTimes(1);
  });
})
