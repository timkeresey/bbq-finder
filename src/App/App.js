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
      joints: [],
      favs: []
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
            <Link to='/favorites' className='fav-link'>gotta have 'em</Link>
          </nav>
          <img />
        </header>
        <main>
          <SearchForm />
          <JointContainer joints={this.state.joints}/>
          <Route path='/favorites' render={() => <FavPage joints={this.state.favs} />} />
        </main>
      </body>
    )
  }
}

export default App;
