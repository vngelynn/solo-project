/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import TotalsDisplay from '../components/TotalsDisplay';
import MarketsContainer from './MarketsContainer';
import * as actions from '../actions/actions';

const mapStateToProps = ({
  markets: { totalCards, totalMarkets, synced },
}) => ({
  totalCards,
  totalMarkets,
  synced,
});

const mapDispatchToProps = dispatch => ({
  syncMarkets: () => dispatch(actions.syncMarkets()),
  resetOptions: () => dispatch(actions.resetOptions()),
  spinOptions: () => dispatch(actions.spinOptions()),
});

const MainContainer = props => (
  <div className="container">
    <div className="outerBox">
      <h1 id="header">Decision Maker</h1>
      <MarketsContainer />
      <TotalsDisplay {...props} />
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
