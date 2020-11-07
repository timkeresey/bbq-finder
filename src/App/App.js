import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import JointContainer from '../JointContainer/JointContainer';
import FavPage from '../FavPage/FavPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      stateUS: '',
      cityID: '',
      joints: []
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <body>
        <header>
          <h1>BBQ</h1>
          <nav className='link'>
            <Link to='/favorites' className='fav-link'>Gotta Have 'Em</Link>
          </nav>
          <img />
        </header>
        <main>
          <SearchForm />
          <JointContainer joints={this.state.joints}/>
          <Route path='/favorites' render={() => <FavPage joints={this.state.joints}}
        </main>
      </body>
    )
  }
}
