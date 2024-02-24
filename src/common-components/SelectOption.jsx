// import * as React from 'react';

const SelectOption = ({label, options,value, onChange,style}) => {
  return (
    <div>
    {/* <label>{label}</label> */}
     <select value={value} onChange={onChange} className={style}>
     <option value="All" selected="">      
     {label}
          </option>
          {options.map((option) => (
               <option key={option.id} value={option.value}>{option.value}</option>
          ))}
     </select>
    </div>
  )
}

export default SelectOption;