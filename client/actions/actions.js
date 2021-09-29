/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

import axios from 'axios';
import * as types from '../constants/actionTypes';

export const updateLocation = data => ({
  type: types.UPDATE_LOCATION,
  payload: data,
});

export const addCard = id => ({
  type: types.ADD_CARD,
  payload: id,
});

export const deleteCard = id => ({
  type: types.DELETE_CARD,
  payload: id,
});

export const resetOptions = id => (dispatch, getState) => {
    dispatch({ type: types.RESET_OPTIONS, payload: id });
};

export const spinOptions = id => (dispatch, getState) => {
  dispatch({ type: types.SPIN_OPTIONS, payload: id });
  const spinResult = getState().markets.spinResult;
  alert(spinResult);
};

export const addMarket = event => (dispatch, getState) => {
  event.preventDefault();
  const location = getState().markets.newLocation;
  if (location) {
    dispatch({
      type: types.ADD_MARKET,
      payload: location,
    });
  }
};

export const syncMarkets = () => (dispatch, getState) => {
  axios.put('/markets', getState().markets.marketList)
    .then(({ status }) => {
      if (status === 200) dispatch({ type: types.SYNC_MARKETS });
    })
    .catch(console.error);
};

export const loadMarkets = () => (dispatch) => {
  axios.get('/markets')
    .then(({ data }) => {
      dispatch({
        type: types.LOAD_MARKETS,
        payload: data,
      });
    })
    .catch(console.error);
};
