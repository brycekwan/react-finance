import { combineReducers } from 'redux';

import selectedStock from '../reducers/selectedStockReducer';
import stocks from '../reducers/stocksReducer'; 

const rootReducer = combineReducers({
  selectedStock, 
  stocks
});

export default rootReducer;
