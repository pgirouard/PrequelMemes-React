import React, { Component } from 'react';
import CharacterSelection from './components/CharacterSelection';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CharacterSelection/>
      </div>
    );
  }
}

export default App;
