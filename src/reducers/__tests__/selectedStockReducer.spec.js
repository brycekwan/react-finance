import selectedStockReducer from '../selectedStockReducer'; 
import * as actions from '../../actions/index.js'; 

describe('selectedStockReducer', () => {
  it('sets initial state to empty object', () => {
    const state = selectedStockReducer(undefined, {}); 
    
    expect(state).toEqual({}); 
  })

  it('updates state on success', () => {
    const expectedData = {symbol: 'AMZN'}; 
    const action = {type: actions.FETCH_STOCK_SUCCESS, selectedStock: expectedData}; 

    const state = selectedStockReducer(undefined, action); 

    expect(state).toEqual(expectedData);
  })

  it('does not update state on failure', () => { 
    const expectedData = {symbol: 'AMZN'}; 
    const action = {type: actions.FETCH_STOCK_FAILED, selectedStock: expectedData}; 

    const state = selectedStockReducer(undefined, action); 

    expect(state).toEqual({});
  })
})