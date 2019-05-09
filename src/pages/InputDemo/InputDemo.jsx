/* eslint-disable no-console */
import React, { Component } from 'react';

import {
  TextField,
  SelectField,
  RadioGroup,
  Button,
} from '../../components';
import { sportOption, cricketOption, footballOption } from '../../configs';
import inputDemoSchema from './validation';

class InputDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sport: '',
      sportValue: '',
      error: {
        name: '',
        sport: '',
        sportValue: '',
      },
    };
  }

  componentDidUpdate = () => {
    console.log(this.state);
  }

  handleChange = field => (event) => {
    this.setState({
      [field]: event.target.value,
    });
  }

  handleIsValid = () => {
    const {
      state: {
        name,
        sport,
        sportValue,
      },
    } = this;

    const value = {
      name,
      sport,
      sportValue,
    };

    const options = {
      abortEarly: false,
    };

    return inputDemoSchema.isValidSync(value, options);
  }

  handleValidation = field => () => {
    console.log('Field is ', field);
  }

  render() {
    const {
      name,
      sport,
      getError,
    } = this.state;

    return (
      <>
        <h3>Name</h3>
        <TextField
          value={name}
          error={getError.name}
          onChange={this.handleChange('name')}
          onBlur={this.handleValidation('name')}
        />
        <h3>Select the game you play?</h3>
        <SelectField
          options={sportOption}
          error={getError.sport}
          onChange={this.handleChange('sport')}
          onBlur={this.handleValidation('sport')}
        />
        {
          sport === 'cricket' && (
            <>
              <h3>What you do?</h3>
              <RadioGroup
                value="sport"
                options={cricketOption}
                error={getError.sportValue}
                onChange={this.handleChange('sportValue')}
                onBlur={this.handleValidation('sportValue')}
              />
            </>
          )
        }
        {
          sport === 'football' && (
            <>
              <h3>What you do?</h3>
              <RadioGroup
                value="sport"
                options={footballOption}
                error={getError.sportValue}
                onChange={this.handleChange('sportValue')}
                onBlur={this.handleValidation('sportValue')}
              />
            </>
          )
        }
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Button value="Cancel" color="primary" />
          { this.handleIsValid() ? <Button value="Submit" /> : <Button value="Submit" disabled /> }
        </div>
      </>
    );
  }
}

export default InputDemo;
