import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const Header = ({ fields }) => (
  <div>
    <Text field={fields.heading} />
  </div>
);

export default Header;
