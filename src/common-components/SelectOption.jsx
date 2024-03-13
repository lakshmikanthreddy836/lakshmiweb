// import * as React from 'react';

const SelectOption = ({ label, options, value, onChange, style, name, showKey = "value", getKey = "value" }) => {
  return (
    <div>
      {/* <label>{label}</label> */}
      <select value={value} onChange={onChange} className={style} name={name}>
        <option value="All" selected="">
          {label}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option[getKey]}>{option[showKey]}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectOption;