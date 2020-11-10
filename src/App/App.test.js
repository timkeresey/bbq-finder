import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { getCityID, getJoints } from '../apiCalls.js'
import App from './App';
import SearchForm from '../SearchForm/SearchForm.js';
import JointContainer from '../JointContainer/JointContainer.js';
import Joint from '../Joint/Joint.js';
import FavPage from '../FavPage/FavPage.js';
import Favorite from '../Favorite/Favorite.js';
jest.mock('../apiCalls.js');

describe('App', () => {
  it('for a user, should display BBQ joints from a searched city', async () =>{

    render(
      <BrowserRouter><App /></BrowserRouter>
    );

    const city = screen.getByTestId('city-input');
    userEvent.type(city, 'Denver');
    const state = screen.getByTestId('state-input');
    userEvent.type(state, 'CO');
    userEvent.click(screen.getByText('Search'));

    getJoints.mockResolvedValueOnce([
      {
        restaurant: {
          id: 0,
          name: 'BBQ place',
          phone_numbers: '555-555-5555',
          location: {
            address: '123 N. South Street, Denver, CO'
          }
        }
      }
    ])

    const restaurant = await waitFor(() => screen.getByText('BBQ Place'));
    expect(rextaurant).toBeInTheDocument();
  })
})
