import React from 'react';
import PropTypes from 'prop-types';

import { baseStyle, buttonStyle } from './style';

const Button = (props) => {
  const {
    color,
    disabled,
    style,
    value,
    onClick,
  } = props;

  return (
    <div style={{ ...baseStyle }}>
      <button type="button" disabled={disabled} style={{ ...buttonStyle, ...style, color }} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: 'default',
  disabled: false,
  style: {},
};

Button.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
