/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { baseStyle, selectFieldStyle } from './style';

const SelectField = (props) => {
  const {
    error,
    value,
    options,
    defaultText,
    ...rest
  } = props;

  return (
    <div style={{ ...baseStyle }}>
      <select style={{ ...selectFieldStyle }} {...rest}>
        <option key={defaultText} value="" selected>{defaultText}</option>
        {
          options
            .map(element => (
              <option
                key={Object.values(element)}
                value={Object.keys(element)}
              >
                {Object.values(element)}
              </option>
            ))
        }
      </select>

      { error ? <span style={{ color: '#fc7e7e' }}>{error}</span> : '' }
    </div>
  );
};

SelectField.defaultProps = {
  error: '',
  options: [],
  defaultText: 'Select',
};

SelectField.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultText: PropTypes.string,
};

export default SelectField;
