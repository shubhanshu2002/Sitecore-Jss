import React from 'react';
import './Cards.css';

const Cards = (props) => {
  const { card_list } = props.fields;

  return (
    <div className="card_container">
      {card_list.map((listitem, index) => (
        <div className="card_item" key={index}>
          <h1>{listitem.fields.title.value}</h1>
          <p>{listitem.fields.Desc.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
