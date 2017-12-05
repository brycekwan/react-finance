export const FETCH_STOCK = 'FETCH_STOCK'; 
export const FETCH_STOCK_SUCCESS = 'FETCH_STOCK_SUCCESS'; 
export const FETCH_STOCK_FAILED = 'FETCH_STOCK_FAILED';

export const ADD_STOCK = 'ADD_STOCK'; 
export const REMOVE_STOCK = 'REMOVE_STOCK';

export function fetchStock(symbol) { 
  return { 
    type: FETCH_STOCK, 
    payload: symbol
  }
}

export function addStock(data) {
  return { 
    type: ADD_STOCK, 
    payload: data
  }
}

export function removeStock(data) { 
  return { 
    type: REMOVE_STOCK, 
    payload: data
  }
}