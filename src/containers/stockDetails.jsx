import React, { Component } from 'react';
import { connect } from 'react-redux';

class StockDetails extends Component {
  render() {
    if (!this.props.selectedStock["Meta Data"]) {
      return (<div></div>);
    }

    const lastRefreshed = this.props.selectedStock["Meta Data"]["3. Last Refreshed"];
    const timeSeries = this.props.selectedStock["Time Series (1min)"];
    const currentQuote = timeSeries[lastRefreshed];

    return (
      <div>
        <h2>Stocks Details</h2>
        <div className="col-4">
          Close:${currentQuote["4. close"]}
        </div>
        <div className="col-8">
          <div className="col">High: ${currentQuote["2. high"]}</div>
          <div className="col">Low: ${currentQuote["3. low"]}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ selectedStock }) {
  return {
    selectedStock
  }
}

export default connect(mapStateToProps)(StockDetails);