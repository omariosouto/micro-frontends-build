import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './index';
storiesOf('Button', module).add('sample state', function () {
  return React.createElement(Button, null, "Bagulheiros");
}).add('segundo caso', function () {
  return React.createElement(Button, null, "Bagulhos");
});