import React from 'react';
import PropTypes from 'prop-types';

import { baseStyle, textFieldStyle, errorStyle } from './style';

const TextField = (props) => {
  const {
    value,
    error,
    disabled,
    ...rest
  } = props;

  const { color } = errorStyle;

  const borderColor = error ? color : 'lightgray';

  return (
    <div style={{ ...baseStyle }}>
      <input
        type="text"
        value={value}
        disabled={disabled}
        style={{ ...textFieldStyle, borderColor }}
        {...rest}
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
