import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const characters = [
  { text: 'Obiwan', value: 'obiwan', image: '' },
  { text: 'Quigon', value: 'quigon', image: '' },
  { text: 'Anakin', value: 'anakin', image: '' }
]

class CharacterSelection extends React.Component {
    render(){
        return (
            <Dropdown placeholder='Select a Character' fluid search selection options={characters} />
        )
    }
}

export default CharacterSelection;