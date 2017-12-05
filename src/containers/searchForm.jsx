import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStock } from '../actions';

class SearchForm extends Component {
  constructor(props) { 
    super(props); 

    this.state = { 
      stockSymbol: ''
    };
  }

  searchStockSymbol = (event) => {
    this.props.fetchStock(this.state.stockSymbol); 
  }

  render() {
    return (
      <div className="form-inline" >
        <input
          value={this.state.stockSymbol}
          onChange={(event) => {this.setState({ stockSymbol: event.target.value})}}
          className="form-control"
          placeholder="Enter stock symbol"
        />
        <button
          onClick={this.searchStockSymbol}
          className="btn btn-primary">
          Search
        </button>
      </div>
    );
  }
}

export default connect(null, { fetchStock })(SearchForm);