import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { getCityID, getJoints } from '../apiCalls.js'
import App from './App';

jest.mock('../apiCalls.js');

describe('App', () => {
  it('*', () => {
  })
})
