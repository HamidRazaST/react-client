import React from 'react';
import PropTypes from 'prop-types';

const performCalculation = (first, second, operator) => {
  switch (operator) {
  case '+':
    return first + second;
  case '-':
    return first - second;
  case '*':
    return first * second;
  case '/':
    return first / second;
  default:
    return 'Invalid Operator';
  }
};

const Math = (props) => {
  const {
    first,
    second,
    operator,
    children,
  } = props;

  const result = performCalculation(first, second, operator);

  if (children) {
    return children(first, second, operator, result);
  }

  return (
    <div>
      {first}
      {' '}
      {operator}
      {' '}
      {second}
      {' '}
      =
      {' '}
      {result}
    </div>
  );
};

Math.defaultProps = {
  operator: '',
  children: null,
};

Math.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  operator: PropTypes.string,
  children: PropTypes.func,
};

export default Math;
