import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Dropdown, Select } from 'semantic-ui-react';

const options = [
  { key: 'page', text: 'Obiwan', value: 'obiwan' },
  { key: 'org', text: 'Quigon', value: 'quigon' },
  { key: 'site', text: 'Anakin', value: 'anakin' },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Select button basic floating options={options} defaultValue='Select a Character'/>
        <Button
          color='yellow'
          content='Search'
        />
      </div>
    );
  }
}

export default App;
