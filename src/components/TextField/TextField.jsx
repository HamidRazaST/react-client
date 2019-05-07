import React from 'react';
import PropTypes from 'prop-types';

import { root, child } from './style';

const TextField = (props) => {
  const {
    value,
    error,
    disabled,
    onChange,
  } = props;

  let color;

  if (error) {
    color = '#fc7e7e';
  } else if (disabled) {
    color = '#e2e2e2';
  } else {
    color = 'lightgray';
  }

  return (
    <div style={root}>
      <input
        type="text"
        value={value}
        disabled={!!disabled}
        style={{ ...child, borderColor: color }}
        onChange={onChange}
      />

      { error ? <span style={{ color }}>{error}</span> : '' }
    </div>
  );
};

TextField.defaultProps = {
  error: '',
  disabled: false,
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
};

export default TextField;
