/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const RadioGroup = (props) => {
  const {
    error,
    value,
    onChange,
    options,
  } = props;

  return (
    <>
      {
        options.map(element => (
          <>
            <label htmlFor={element} key={element}>
              <input type="radio" id={element} name={value} value={element} onChange={onChange} />
              {element}
            </label>
            <br />
          </>
        ))
      }
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
