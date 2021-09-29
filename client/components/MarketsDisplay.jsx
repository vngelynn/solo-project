/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n Market components
 *
 * ************************************
 */

import React from 'react';
import Market from './Market';

const percentOfTotal = (cardCount, total) => (
  cardCount ? ((cardCount / total) * 100).toFixed(2) : 0);

const marketMaker = (market, idx, props) => (
  <Market
    {...market}
    key={idx}
    percentage={percentOfTotal(market.cards, props.totalCards)}
    index={idx}
    addCard={() => props.addCard(idx)}
    deleteCard={() => props.deleteCard(idx)}
  />
);

const MarketsDisplay = props => (
  <div className="displayBox">
    <h4>Options</h4>
    <div className="allMarkets">
      {props.marketList.map((market, idx) => marketMaker(market, idx, props))}
    </div>
  </div>
);

export default MarketsDisplay;
