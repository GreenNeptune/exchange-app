import React, { useRef } from 'react'

function SelectCurrency(props) {
  let { currencies_ar, nameField, valueNameField } = props;

  let currencyRef = useRef();

  const onChangeSetCurrencyData = () => {
    let currencyName = currencies_ar[currencyRef.current.selectedIndex][0];
    let currencyValue = currencyRef.current.value;

    props.setCurrencyData({
      ...props.currencyData,
      [nameField]: currencyName,
      [valueNameField]: currencyValue,
    })
  }

  return (
    <select ref={currencyRef} name={nameField} id={nameField}
      onChange={onChangeSetCurrencyData}
      className="form-select my-4 p-3" >
      {currencies_ar.map((item) => {
        let [currency, currencyValue] = item;
        return (
          <option key={`${nameField}-${currency}`} value={currencyValue}>{currency}</option>
        )
      })}
    </select>
  )
}

export default SelectCurrency