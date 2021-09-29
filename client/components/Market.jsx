/**
 * ************************************
 *
 * @module  Market
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */

import React from 'react';
import LabeledText from './LabeledText';

const Market = ({
  index,
  location,
  cards,
  percentage,
  addCard,
  deleteCard,
}) => (
  <div className="marketBox">
    {/* <LabeledText label="Marketdoes this work ID" text={index} /> */}
    {/* Please use location to display option */}
    <LabeledText label={location} />

    <div className="flex">
    <button className='addCard' onClick={addCard}>+</button>
    <button className='deleteCard' onClick={deleteCard}>-</button>
    </div>
    
    {/* If you have time, use below to add votes feature
    <LabeledText label="Cards" text={cards} />
    <LabeledText label="% of total" text={percentage} />
    <div className="flex">
      <button className='addCard' onClick={addCard}>+</button>
      <button className='deleteCard' onClick={deleteCard}>-</button>
    </div> */}
  </div>
);

export default Market;
