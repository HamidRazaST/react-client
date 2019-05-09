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
      hasErrors: {
        name: true,
        sport: true,
        sportValue: true,
      },
      isTouched: {
        name: false,
        sport: false,
        sportValue: false,
      },
      getError: {
        name: '',
        sport: '',
        sportValue: '',
      },
    };
  }

  componentDidUpdate = () => {
    console.log(this.state);
    // console.log(this.state.getError);
  }

  handleChange = field => (event) => {
    this.setState({
      [field]: event.target.value,
    });
  }

  handleValidation = field => () => {
    const {
      state: {
        name,
        sport,
        sportValue,
        getError,
      },
    } = this;

    const data = {
      name,
      sport,
      sportValue,
    };

    const options = {
      abortEarly: true,
    };

    inputDemoSchema
      .validate(data, options)
      .then((res) => {
        console.log('hi ', res);
      })
      .catch((err) => {
        console.log(err);
      });

    // inputDemoSchema
    //   .validate(data, options)
    //   .then((res) => {
    //     console.log('hi ', res);
    //   })
    //   .catch(({ inner }) => {
    //     console.log('inner = ', inner);
    //     inner.forEach((error) => {
    //       console.log('path = ', error.path);
    //       this.setState({
    //         getError: {
    //           ...getError,
    //           [error.path]: error.message,
    //         },
    //       });
    //     });
    //   });
  }

  render() {
    const {
      name,
      sport,
      hasErrors,
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
        <SelectField options={sportOption} error={getError.sport} onChange={this.handleChange('sport')} />
        {
          sport === 'cricket' && (
            <>
              <h3>What you do?</h3>
              <RadioGroup value="sport" options={cricketOption} error={getError.sportValue} onChange={this.handleChange('sportValue')} />
            </>
          )
        }
        {
          sport === 'football' && (
            <>
              <h3>What you do?</h3>
              <RadioGroup value="sport" options={footballOption} error={getError.sportValue} onChange={this.handleChange('sportValue')} />
            </>
          )
        }
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Button value="Cancel" color="primary" />
          { hasErrors ? <Button value="Submit" disabled /> : <Button value="Submit" /> }
        </div>
      </>
    );
  }
}

export default InputDemo;
