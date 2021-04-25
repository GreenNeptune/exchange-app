import React, { useRef, useEffect } from 'react'
import SelectCurrency from './selectCurrency';
import ButtonToggleExchangeRate from './buttonToggleExchangeRate';

function InputEx(props) {
  let { toggleExchangeRate, fromCurrencyValue, toCurrencyValue, amount, currencies_ar } = props.currencyData

  let currencyAmountRef = useRef();

  useEffect(() => {
    calcScore();

  }, [fromCurrencyValue, toCurrencyValue, amount, toggleExchangeRate])


  const calcScore = () => {

    let score = amount * (toCurrencyValue / fromCurrencyValue);
    props.setCurrencyData({
      ...props.currencyData,
      score
    })
  }

  const changeCurrencyAmount = () => {
    let currencyAmount = currencyAmountRef.current.value;
    props.setCurrencyData({
      ...props.currencyData,
      amount: currencyAmount,
    })
  }

  return (
    <div className="col-lg-6 p-4 ms-auto">
      <input ref={currencyAmountRef} type="number" onInput={changeCurrencyAmount} value={props.currencyData.amount} className="form-control" />
      <div className={`d-flex flex-column ${toggleExchangeRate ? "flex-column-reverse" : ""}`}>
        <SelectCurrency currencies_ar={currencies_ar}
          nameField={!toggleExchangeRate ? "fromCurrency" : "toCurrency"}
          valueNameField={!toggleExchangeRate ? "fromCurrencyValue" : "toCurrencyValue"}
          currencyData={props.currencyData}
          setCurrencyData={props.setCurrencyData}
        />
        <ButtonToggleExchangeRate
          currencyData={props.currencyData}
          setCurrencyData={props.setCurrencyData} />
        <SelectCurrency
          currencies_ar={currencies_ar}
          nameField={toggleExchangeRate ? "fromCurrency" : "toCurrency"}
          valueNameField={toggleExchangeRate ? "fromCurrencyValue" : "toCurrencyValue"}
          currencyData={props.currencyData}
          setCurrencyData={props.setCurrencyData}
        />
      </div>
    </div>
  )
}

export default InputEx