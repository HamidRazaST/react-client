import React from 'react';

import { TextField } from './components';

const App = () => (
  <>
    <TextField message="This is a Disabled Input" value="Disabled Input" error="" disabled="true" />
    <TextField message="A Valid Input" value="Accessible" error="" disabled="false" />
    <TextField message="An Input with errors" value="101" error="Could not be greater than" disabled="false" />
  </>
);

export default App;
