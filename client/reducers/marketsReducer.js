/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  newLocation: '',
  spinResult: '',
  synced: true,
};

const marketsReducer = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case types.ADD_MARKET: {

      return {
        ...state,
        marketList: state.marketList.concat({
          location: action.payload,
          cards: 0,
        }),
        totalMarkets: state.totalMarkets + 1,
        newLocation: '',
        synced: false,
      };
    }

    case types.UPDATE_LOCATION:
      return {
        ...state,
        newLocation: action.payload,
      };

    // case types.ADD_CARD: {
    //   const newMarketList = state.marketList.map((market, idx) => {
    //     if (idx === action.payload) {
    //       return {
    //         ...market,
    //         cards: market.cards + 1,
    //       };
    //     }
    //     return market;
    //   });

    //   return {
    //     ...state,
    //     totalCards: state.totalCards + 1,
    //     marketList: newMarketList,
    //     synced: false,
    //   };
    // }

    case types.DELETE_CARD: {
      // const newMarketList = state.marketList.map((market, idx) => {
      //   if (idx === action.payload) {
      //     return {
      //       ...market,
      //       cards: market.cards - 1,
      //     };
      //   }
      //   return market;
      // });

      
      //.filter() creates a new array
      // console.log('This is marketList: ', state.marketList);
      // console.log('This is action.payload: ' ,action.payload);

      const newMarketList = state.marketList.filter((market, index) => index !== action.payload);
      // console.log('this is newMarketList: ', newMarketList);

      return {
        ...state,
        marketList: newMarketList,
        totalMarkets: state.totalMarkets + 1,
        newLocation: '',
        spinResult: '',
        synced: false,
      };

    }

    case types.RESET_OPTIONS: 
      return {
        ...state,
        marketList: [],
        totalMarkets: state.totalMarkets + 1,
        newLocation: '',
        spinResult: '',
        synced: false,
      };

    case types.SPIN_OPTIONS: {
      // marketList: [ {location: 'place'}, {location: 'place'}..]
      const random = Math.floor(Math.random() * (state.marketList.length - 0) + 0);
      console.log(random);
      const newSpinResult = state.marketList[random].location;
      return {
        ...state,
        spinResult: newSpinResult, 
      }
    }

    case types.SYNC_MARKETS:
      return {
        ...state,
        synced: true,
      };

    case types.LOAD_MARKETS:
      return {
        ...state,
        totalMarkets: action.payload.length,
        totalCards: action.payload.reduce((res, m) => res + m.cards, 0),
        marketList: action.payload,
      };

    default:
      return state;
  }
};

export default marketsReducer;
