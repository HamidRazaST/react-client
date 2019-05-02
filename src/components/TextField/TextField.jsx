import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { root, child } from './style';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      value,
      error,
      disabled,
    } = this.props;

    let color;

    if (error) {
      color = '#fc7e7e';
    } else if (disabled) {
      color = '#e2e2e2';
    } else {
      color = '#f9a05c';
    }

    return (
      <div style={root}>
        <input
          type="text"
          value={value}
          disabled={!!disabled}
          style={{ ...child, borderColor: color }}
        />

        { error ? <span style={{ color }}>{error}</span> : '' }
      </div>
    );
  }
}

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default TextField;
