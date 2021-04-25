import React from 'react'

function ButtonToggleExchangeRate(props) {
  const {
    toggleExchangeRate,
    fromCurrencyValue,
    toCurrencyValue,
    fromCurrency,
    toCurrency } = props.currencyData;

  const toggleCurrenciesExchangeRate = () => {

    // swap data between two currencies, and toggle exchange rate   
    props.setCurrencyData({
      ...props.currencyData,
      toggleExchangeRate: !toggleExchangeRate,
      fromCurrencyValue: toCurrencyValue,
      toCurrencyValue: fromCurrencyValue,
      fromCurrency: toCurrency,
      toCurrency: fromCurrency,
    })
  }

  return (
    <button onClick={toggleCurrenciesExchangeRate} className="btn btn-info p-3 text-white ">
      <i className="fa fa-exchange" aria-hidden="true"></i>
    </button>
  )
}

export default ButtonToggleExchangeRate