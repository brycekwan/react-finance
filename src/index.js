import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'; 

import StockTable from './containers/stockTable';
import SearchForm from './containers/searchForm';
import AddForm from './containers/addForm'; 
import StockDetails from './containers/stockDetails';

import reducers from './reducers';
import mySaga from './sagas'; 

import './styles/index.css';

const sagaMiddleware = createSagaMiddleware(); 
const store = createStore(reducers, applyMiddleware(sagaMiddleware)); 

ReactDOM.render(
  <Provider store={store}>
    <div className="app">
      <h2>Stock Tracker</h2>
      <SearchForm />
      <StockDetails />
      <AddForm />
      <StockTable />
    </div> 
  </Provider>,
  document.getElementById('root')
);

sagaMiddleware.run(mySaga);