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

  handleChange = field => (event) => {
    if (field === 'sport') {
      this.setState({
        sportValue: '',
      });
    }
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

  handleResetValidation = field => () => {
    this.setState({
      error: {
        [field]: '',
      },
    });
  }

  handleValidation = field => () => {
    const {
      state: {
        name,
        sport,
        sportValue,
      },
    } = this;

    try {
      let value = '';
      if (field === 'name') {
        value = name;
      } else if (field === 'sport') {
        value = sport;
      } else if (field === 'sportValue') {
        value = sportValue;
      }

      inputDemoSchema.validateSyncAt(field, value);

      this.setState({
        error: {
          [field]: '',
        },
      });
    } catch ({ message }) {
      this.setState({
        error: {
          [field]: message,
        },
      });
    }
  }

  render() {
    const {
      name,
      sport,
      error,
    } = this.state;

    return (
      <>
        <h3>Name</h3>
        <TextField
          value={name}
          error={error.name}
          onChange={this.handleChange('name')}
          onClick={this.handleResetValidation('name')}
          onBlur={this.handleValidation('name')}
        />
        <h3>Select the game you play?</h3>
        <SelectField
          options={sportOption}
          error={error.sport}
          onChange={this.handleChange('sport')}
          onClick={this.handleResetValidation('name')}
          onBlur={this.handleValidation('sport')}
        />
        {
          sport === 'cricket' && (
            <>
              <h3>What you do?</h3>
              <RadioGroup
                value="sport"
                options={cricketOption}
                error={error.sportValue}
                onChange={this.handleChange('sportValue')}
                onClick={this.handleResetValidation('name')}
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
                error={error.sportValue}
                onChange={this.handleChange('sportValue')}
                onClick={this.handleResetValidation('name')}
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
