import React from 'react';
import { Typography } from '@material-ui/core';

import { Math } from '../../components';

const ChildrenDemo = () => (
  <>
    <Math first={9} second={5} operator="+" />
    <Math first={9} second={5} operator="-" />
    <Math first={9} second={5} operator="*" />
    <Math first={9} second={5} operator="/" />
    <Math first={9} second={5} operator="^" />
    <Math first={9} second={0} operator="/" />
    <Math first={9} second={5} operator="+">
      {(first, second, operator, result) => (
        <div>{`Sum of ${first} and ${second} is ${result}`}</div>
      )}
    </Math>
    <Typography>
      <Math first={9} second={5} operator="+">
        {(first, second, operator, result) => (
          <div>{`When we add ${first} with ${second} then we will get ${result} as result`}</div>
        )}
      </Math>
    </Typography>
  </>
);

export default ChildrenDemo;
