import React from 'react'
import { getNumberWithCommas, showCurrentDate } from "../services/currency";

function ScoreEx(props) {
  let { fromCurrency, toCurrency, amount, timestamp, score } = props.currencyData;

  const showScoreWithCommas = (num) => {
    let num_str;

    if (toCurrency === "BTC") {
      num_str = num.toFixed(10);
    } else {
      num_str = num.toFixed(2);
    }

    return getNumberWithCommas(Number(num_str));
  }
  return (

    <div className="col-lg-8 p-4 border border-light bg-white shadow rounded">
      <div className="h3 fw-normal"> From {fromCurrency} To {toCurrency}</div>
      <div className="h3 fw-normal">The amount is: {amount}</div>
      <div className="h3">You will get: {showScoreWithCommas(score, toCurrency)}{toCurrency}</div>
      <div className="h5 text-end text-light-gray pt-4">{showCurrentDate(timestamp)}</div>
    </div>
  )
}

export default ScoreEx