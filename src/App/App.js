import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
