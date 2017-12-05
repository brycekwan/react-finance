import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { addStock, removeStock } from '../actions'; 

import '../styles/addForm.css';

export class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState(); 
  }

  initialState = () => { 
    return {
      type: 'buy', 
      shares: 0, 
      price: 0
    }
  }

  onInputChange = (event) => {
    const fieldName = event.target.name; 
    const value = event.target.value; 
    this.setState({ 
      [fieldName]: value
    });
  }

  submitForm = (event) => {
    event.preventDefault();
    
    const symbol = this.props.selectedStock["Meta Data"]["2. Symbol"]; 
    const shares = this.state.shares; 
    const costPrice = this.state.price; 

    const data = { 
      shares, 
      costPrice,       
      symbol
    }
    if (this.state.type === 'sell') {
        this.props.removeStock(data);
    } else {
        this.props.addStock(data);
    }

    this.setState(this.initialState()); 
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.submitForm}>
        <div className="form-group">
          <label>Type</label>
          <select className="form-control"
            name="type"
            onChange={this.onInputChange}
            value={this.state.type}
          >
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <div className="form-group">
          <label>Shares</label>
          <input
            type="text"
            patter="[0-9]*"
            name="shares"
            onChange={this.onInputChange}
            value={this.state.shares}
            className="form-control" />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            patter="[0-9]*"
            name="price"
            onChange={this.onInputChange}
            value={this.state.price}
            className="form-control" />
        </div>
        <button
          type="submit"
          className="btn btn-submit">
          Submit
        </button>
      </form>
    )
  }
}

function mapStateToProps({selectedStock}) { 
  return { 
    selectedStock
  }
}

export default connect(mapStateToProps, { addStock, removeStock })(AddForm);