import { FETCH_STOCK, FETCH_STOCK_SUCCESS, FETCH_STOCK_FAILED } from '../actions'; 

import { call, put, takeLatest} from 'redux-saga/effects'; 
import { AlphaVantage } from '../apis/stockApi';

function* fetchStock(action) { 
  try { 
    const selectedStock = yield call(AlphaVantage, action.payload); 
  
    yield put({type: FETCH_STOCK_SUCCESS, selectedStock })
  } catch (e) { 
    yield put({type: FETCH_STOCK_FAILED, message: e.message })
  }
}

function* mySaga() { 
  yield takeLatest(FETCH_STOCK, fetchStock); 
}

export default mySaga; 