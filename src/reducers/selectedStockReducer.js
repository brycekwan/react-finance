import { FETCH_STOCK_SUCCESS, FETCH_STOCK_FAILED } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case (FETCH_STOCK_SUCCESS):
      return action.selectedStock;
    case (FETCH_STOCK_FAILED): 
      return state; 
    default:
      return state;
  }
}