/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const RadioGroup = (props) => {
  const {
    error,
    value,
    options,
    ...rest
  } = props;

  return (
    <>
      {
        options.map(element => (
          <>
            <label htmlFor={element} key={element}>
              <input type="radio" id={element} name={value} value={element} {...rest} />
              {element}
            </label>
            <br />
          </>
        ))
      }

      { error ? <span style={{ color: '#fc7e7e' }}>{error}</span> : '' }
    </>
  );
};

RadioGroup.defaultProps = {
  error: '',
  options: [],
};

RadioGroup.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default RadioGroup;
