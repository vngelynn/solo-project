/**
 * ************************************
 *
 * @module  TotalsDisplay
 * @author
 * @date
 * @description presentation component that displays the total cards and total markets
 *
 * ************************************
 */

import React from 'react';
import LabeledText from './LabeledText';

const TotalsDisplay = ({
  totalCards,
  totalMarkets,
  resetOptions,
  spinOptions,
  syncMarkets,
  synced,
}) => (
  <div className="innerbox" id="totals">
    <div>
    <button className='spin' onClick={spinOptions}>Spin</button>
    <button className='reset' onClick={resetOptions}>Reset</button>
    </div>
    <button id='sync' className="secondary" onClick={syncMarkets} disabled={synced}>Sync</button>
  </div>
);

  {/* <LabeledText label="Total Cards" text={totalCards} />
  <LabeledText label="Total Markets" text={totalMarkets} /> */}
  {/* <button onClick={() => alert('hi')}>Add Market</button> */}
export default TotalsDisplay;

