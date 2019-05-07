/* eslint-disable no-console */
import React, { Component } from 'react';

import { TextField, SelectField, RadioGroup } from '../../components';
import { sports, cricket, football } from '../../configs';

class InputDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sport: '',
      cricket: '',
      football: '',
    };
  }

  componentDidUpdate = () => {
    console.log(this.state);
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  handleSportChange = (event) => {
    this.setState({
      sport: event.target.value,
      cricket: '',
      football: '',
    });
  }

  handleCricketChange = (event) => {
    this.setState({
      cricket: event.target.value,
    });
  }

  handleFootballChange = (event) => {
    this.setState({
      football: event.target.value,
    });
  }

  render() {
    const { name, sport } = this.state;

    return (
      <>
        <h3>Name</h3>
        <TextField value={name} onChange={this.handleNameChange} />
        <h3>Select the game you play?</h3>
        <SelectField options={sports} onChange={this.handleSportChange} />
        {
          sport === 'cricket' && (
            <>
              <h3>What you do?</h3>
              <RadioGroup value="sport" options={cricket} onChange={this.handleCricketChange} />
            </>
          )
        }
        {
          sport === 'football' && (
            <>
              <h3>What you do?</h3>
              <RadioGroup value="sport" options={football} onChange={this.handleFootballChange} />
            </>
          )
        }
      </>
    );
  }
}

export default InputDemo;
