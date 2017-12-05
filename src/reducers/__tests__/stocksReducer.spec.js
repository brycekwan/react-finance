import stocksReducer from '../stocksReducer'; 
import * as actions from '../../actions';

describe('stocksReducer', () => { 
  it('returns empty array as initial state', () => {
    const state = stocksReducer(undefined, {}); 

    expect(state).toEqual([]);
  });
})

describe('buying stocks', () => { 
  it('adds a stock', () => {
    const payload = {
      symbol: 'AMZN', 
      shares: '10', 
      costPrice: '1150.00'
    };
    const action = { 
      type: actions.ADD_STOCK, 
      payload
    };

    const state = stocksReducer([], action); 

    expect(state).toEqual([payload]); 
  });

  it('accumulates stock with weighted average costPrice', () => {
    const payload = { 
      symbol: 'AMZN', 
      shares: '10', 
      costPrice: '1150.00'
    }; 
    const action = { 
      type: actions.ADD_STOCK, 
      payload
    }; 
    const oldState = [{ 
      symbol: 'AMZN', 
      shares: 10, 
      costPrice: 1000.00
    }]; 

    const newState = stocksReducer(oldState, action); 

    expect(newState).toEqual([{
      symbol: 'AMZN', 
      shares: 20, 
      costPrice: 1075.00
    }]);
  });
})

describe('selling stocks', () => {
  it('does nothing when stock does not exist', () => {
    const payload = { 
      symbol: 'AMZN', 
      shares: '10', 
      costPrice: '1000.00'
    }; 
    const action = { 
      type: actions.REMOVE_STOCK, 
      payload
    }; 

    const state = stocksReducer(undefined, action); 

    expect(state).toEqual([]);
  });

  it('removes stock completely when shares match', () => {
    const payload = { 
      symbol: 'AMZN', 
      shares: '10', 
      costPrice: '1000.00'
    }; 
    const action = { 
      type: actions.REMOVE_STOCK, 
      payload
    }; 
    const oldState = [{
      symbol: 'AMZN', 
      shares: 10, 
      costPrice: 890.00
    }]

    const state = stocksReducer(oldState, action); 

    expect(state).toEqual([]);
  });

  it('removes stock shares', () => { 
    const payload = { 
      symbol: 'AMZN', 
      shares: '10', 
      costPrice: '1150'
    }; 
    const action = { 
      type: actions.REMOVE_STOCK, 
      payload
    }; 
    const oldState = [{ 
      symbol: 'AMZN', 
      shares: 20, 
      costPrice: 1000
    }]; 

    const state = stocksReducer(oldState, action); 

    expect(state).toEqual([{
      symbol: 'AMZN', 
      shares: 10, 
      costPrice: 1000
    }])
  }); 
})