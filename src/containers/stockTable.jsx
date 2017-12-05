import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table } from 'react-bootstrap';

class StockTable extends Component {
  renderStock = (stock) => {
    return (
      <tr key={stock.symbol}>
        <td>{stock.symbol}</td>
        <td>{stock.shares}</td>
        <td>${stock.costPrice}</td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <Table bordered>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Shares</th>
              <th>Cost Price</th>
              <th>Market Price</th>
              <th>Gain/Loss</th>
            </tr>
          </thead>
          <tbody>
            {this.props.stocks.map(this.renderStock)}
          </tbody>
        </Table>
      </div>
    )
  }
}

function mapStateToProps({ stocks }) {
  return {
    stocks
  }
}
export default connect(mapStateToProps)(StockTable); 