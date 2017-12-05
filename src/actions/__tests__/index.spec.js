import * as actions from '..'; 

describe('actions', () => {
  it('creates a fetchStock action', () => {
    const action = actions.fetchStock('MSFT'); 

    expect(action).toEqual({
      type: actions.FETCH_STOCK, 
      payload: 'MSFT'
    }); 
  });

  it('creates an addStock action', () => {
    const data = {
      symbol: 'MSFT', 
      price: 88, 
      shares: 100
    }
    const action = actions.addStock(data); 

    expect(action).toEqual({
      type: actions.ADD_STOCK, 
      payload: data
    });
  });

  it('creates a removeStock action', () => {
    const data = {
      symbol: 'MSFT', 
      price: 88, 
      shares: 100
    }
    const action = actions.removeStock(data); 

    expect(action).toEqual({
      type: actions.REMOVE_STOCK, 
      payload: data
    });
  })
})