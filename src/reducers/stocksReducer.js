import _ from 'lodash';
import { ADD_STOCK, REMOVE_STOCK } from '../actions';

export default function (state = [], action) {
  let existingStock;
  switch (action.type) {
    case (ADD_STOCK):
      existingStock = _.find(state, { symbol: action.payload.symbol });

      if (existingStock) {
        const remainingState = _.reject(state, { symbol: action.payload.symbol });
        const averageCost = calculateWeightedAverage(existingStock, action.payload);

        const newStock = {
          symbol: existingStock.symbol,
          shares: parseInt(existingStock.shares, 10) + parseInt(action.payload.shares, 10),
          costPrice: averageCost
        }
        return [...remainingState, newStock];
      } else {
        return [...state, action.payload];
      }
    case (REMOVE_STOCK):
      existingStock = _.find(state, { symbol: action.payload.symbol });
      const newState = _.reject(state, { symbol: action.payload.symbol });

      if (!existingStock || sharesEqual(action.payload.shares, existingStock.shares)) {
        return newState; 
      } else {
        const recalculatedStock = {
          symbol: existingStock.symbol,
          shares: existingStock.shares - parseInt(action.payload.shares, 10),
          costPrice: existingStock.costPrice
        };
        return [...newState, recalculatedStock];
      }
    default:
      return state;
  }
}

function sharesEqual(newShares, oldShares) {
  return parseInt(newShares) === parseInt(oldShares);
}

function calculateWeightedAverage(existingStock, newStock) {
  const newMarketValue = calculateTotalValue(newStock)
  const existingMarketValue = calculateTotalValue(existingStock);
  const totalShares = parseInt(newStock.shares, 10) + parseInt(existingStock.shares, 10);
  return (newMarketValue + existingMarketValue) / totalShares;
}

function calculateTotalValue(stock) {
  const shares = parseInt(stock.shares, 10);
  const price = parseFloat(stock.costPrice);
  return price * shares;
}
