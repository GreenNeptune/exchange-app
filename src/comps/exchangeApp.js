import React, { useEffect, useState } from 'react';
import { doApiGet } from '../services/apiSer';
import InputEx from './inputEx';
import ScoreEx from './scoreEx';

function ExchangeApp(props) {
  const [currencyData, setCurrencyData] = useState({
    currencies_ar: [],
    fromCurrency: "",
    toCurrency: "",
    fromCurrencyValue: 1,
    toCurrencyValue: 1,
    toggleExchangeRate: false,
    amount: 0,
    score: 0,
    timestamp: 0,
  })

  useEffect(() => {
    doApi();
  }, [])


  const doApi = async () => {
    let url = "/money.json";
    const data = await doApiGet(url);
    let currencies_ar = Object.entries(data.quotes);

    currencies_ar = currencies_ar.map(([currency, currencyValue]) => {
      return [currency.replace("USD", ""), currencyValue]
    })

    setCurrencyData({
      ...currencyData,
      currencies_ar: currencies_ar,
      timestamp: data.timestamp,
      fromCurrency: data.source,
      toCurrency: data.source
    })
  }


  return (
    <div className="container-fluid min-vh-100 bg-light">
      <div className="row bg-warning">
        <h1 className="display-1 text-center text-white fw-bold p-4">Currency Calculator</h1>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <InputEx
            currencyData={currencyData}
            setCurrencyData={setCurrencyData}
          />
        </div>
        <div className="col-lg-6 p-4">
          <ScoreEx
            currencyData={currencyData}
            setCurrencyData={setCurrencyData}
          />
        </div>
      </div>
    </div>
  )
}

export default ExchangeApp