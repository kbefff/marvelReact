import React, { Component } from 'react';
import './App.css';

import Character from './containers/Character'
import Navigation from './components/navigation/Navigation'
import CharacterCard from './components/charactercard/CharacterCard'
// import Thumbnail from 'react-thumbnail'


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Character />
        {/* <CharacterCard /> */}
      </div>
    );
  }
}

export default App;
