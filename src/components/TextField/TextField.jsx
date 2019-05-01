import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { root, child } from './style';

const propTypes = {
  message: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      message,
      value,
      error,
      disabled,
    } = this.props;

    let color;

    if (error.length) {
      color = '#fc7e7e';
    } else if (JSON.parse(disabled)) {
      color = '#e2e2e2';
    } else {
      color = '#f9a05c';
    }

    return (
      <div style={root}>
        <h3>{message}</h3>

        <input
          type="text"
          value={value}
          disabled={JSON.parse(disabled)}
          style={{ ...child, borderColor: color }}
        />

        { error.length ? <span style={{ color }}>{error}</span> : '' }
      </div>
    );
  }
}

TextField.propTypes = propTypes;

export default TextField;
