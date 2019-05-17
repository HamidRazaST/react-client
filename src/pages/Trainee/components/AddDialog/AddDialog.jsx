/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { reach } from 'yup';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  Grid,
  IconButton,
} from '@material-ui/core';
import {
  Email,
  Person,
  Visibility,
  VisibilityOff,
} from '@material-ui/icons';

import addDialogSchema from './validation';

class AddDialog extends Component {
  state = {
    open: false,
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    showPassword: false,
    showPasswordConfirmation: false,
    hasErrors: {
      name: false,
      email: false,
      password: false,
      passwordConfirmation: false,
    },
    isTouched: {
      name: false,
      email: false,
      password: false,
      passwordConfirmation: false,
    },
    getErrors: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  };

  componentDidUpdate = () => {
    const { hasErrors, isTouched, getErrors } = this.state;

    console.log('hasErrors: ', hasErrors);
    console.log('isTouched: ', isTouched);
    console.log('getErrors: ', getErrors);
    console.log('\n\n');
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClickShowPassword = prop => () => {
    this.setState(state => ({ [prop]: !state[prop] }));
  }

  handleValueChange = prop => (event) => {
    const { isTouched } = this.state;
    this.setState(
      {
        [prop]: event.target.value,
      },
      () => {
        if (isTouched[prop]) {
          this.handleCheckValidation(prop)();
        }
      },
    );
  }

  handleCheckValidation = prop => async () => {
    try {
      const { state } = this;

      this.handleIsTouched(prop)();
      await reach(addDialogSchema, prop).validate(state[prop]);
      this.handleErrorValue(prop, false, '')();
    } catch ({ message }) {
      this.handleErrorValue(prop, true, message)();
    }
  }

  handleErrorValue = (prop, hasErrorValue, getErrorValue) => () => {
    const { hasErrors, getErrors } = this.state;

    this.setState({
      hasErrors: {
        ...hasErrors,
        [prop]: hasErrorValue,
      },
      getErrors: {
        ...getErrors,
        [prop]: getErrorValue,
      },
    });
  }

  handleIsTouched = prop => () => {
    const { isTouched } = this.state;

    if (!isTouched[prop]) {
      this.setState({
        isTouched: {
          ...isTouched,
          [prop]: true,
        },
      });
    }
  }

  handleIsValid = () => {
    const {
      state: {
        name,
        email,
        password,
        passwordConfirmation,
      },
    } = this;

    const value = {
      name,
      email,
      password,
      passwordConfirmation,
    };

    const options = {
      abortEarly: false,
    };

    return addDialogSchema.isValidSync(value, options);
  }

  render() {
    const {
      state: {
        open,
        showPassword,
        showPasswordConfirmation,
        hasErrors,
        getErrors,
      },
    } = this;

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add Trainee
        </Button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="sm"
        >
          <DialogTitle id="form-dialog-title">Add Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your trainee details
            </DialogContentText>
            <TextField
              required
              fullWidth
              error={hasErrors.name}
              helperText={getErrors.name}
              id="name"
              label="Name"
              margin="normal"
              variant="outlined"
              onChange={this.handleValueChange('name')}
              onBlur={this.handleCheckValidation('name')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              required
              fullWidth
              error={hasErrors.email}
              helperText={getErrors.email}
              id="email"
              label="Email Address"
              margin="normal"
              variant="outlined"
              onChange={this.handleValueChange('email')}
              onBlur={this.handleCheckValidation('email')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <Grid container spacing={24}>
              <Grid item xl={6} xs={6}>
                <TextField
                  required
                  error={hasErrors.password}
                  helperText={getErrors.password}
                  id="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  margin="normal"
                  variant="outlined"
                  onChange={this.handleValueChange('password')}
                  onBlur={this.handleCheckValidation('password')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword('showPassword')}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xl={6} xs={6}>
                <TextField
                  required
                  error={hasErrors.passwordConfirmation}
                  helperText={getErrors.passwordConfirmation}
                  id="passwordConfirmation"
                  label="Confirm Password"
                  type={showPasswordConfirmation ? 'text' : 'password'}
                  margin="normal"
                  variant="outlined"
                  onChange={this.handleValueChange('passwordConfirmation')}
                  onBlur={this.handleCheckValidation('passwordConfirmation')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword('showPasswordConfirmation')}
                        >
                          {showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" disabled={!this.handleIsValid()}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddDialog;
