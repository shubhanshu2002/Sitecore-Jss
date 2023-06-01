import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const MyComponent = (props) => (
  <div>
    <Text field={props.fields.heading} />
  </div>
);

export default MyComponent;
