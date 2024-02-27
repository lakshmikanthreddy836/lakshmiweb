// import * as React from 'react';

const SelectOption = ({label, options,value, onChange}) => {
  return (
    <div>
    {/* <label>{label}</label> */}
     <select value={value} onChange={onChange} className="w-60 mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]">
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