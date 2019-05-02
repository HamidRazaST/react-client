import React from 'react';

import { Slider, TextField } from '../../components';

const banners = [
  'banners/default.png',
  'banners/cloud.jpg',
  'banners/dns-server.png',
  'banners/full-stack-web-development.jpg',
  'banners/js.jpg',
  'banners/load-balancer.png',
];

const TextFieldDemo = () => (
  <>
    <Slider banners={banners} random />
    <h3>This is a Disabled Input</h3>
    <TextField value="Disabled Input" disabled />
    <h3>A Valid Input</h3>
    <TextField value="Accessible" />
    <h3>An Input with errors</h3>
    <TextField value="101" error="Could not be greater than" />
  </>
);

export default TextFieldDemo;
