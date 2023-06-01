import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const SocialSerivices = (props) => {
  const { Services } = props.fields;

  return (
    <div className="Service_container">
      <h1>
        <Text field={props.fields.CopyRight_Text} />
      </h1>
      {Services.map((listitem, index) => (
        <div className="card_item" key={index}>
          <h1>{listitem.fields.serviceTitle.value}</h1>
          <p>{listitem.fields.serviceDesc.value}</p>
        </div>
      ))}
    </div>
  );
};

export default SocialSerivices;
