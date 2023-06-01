import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const Card = (props) => (
  <div>
    <p>Card Component</p>
    <Text field={props.fields.title} />
    <Text field={props.fields.Desc} />
  </div>
);

export default Card;
