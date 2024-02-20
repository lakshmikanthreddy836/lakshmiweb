import * as React from 'react';
import SelectOption from '../../../common-components/SelectOption';
import Button from '../../../common-components/Button';

const selectOption = [
     { id: 0, label: "Select Type", value: "" }, { id: 1, label: "Income", value: "Income" }, { id: 2, label: "Expense", value: "Expense" }, { id: 3, label: "Investment", value: "Investment" },
];

const AddExpense = () => {

     const [value, setValue] = React.useState('');
     const handleChange = (event) => {
          setValue(event.target.value);
     };
     return (
          <div className='border px-3 py-3 rounded mt-4 mb-4 shadow-[1px_29px_26px_-11px_rgba(189,198,203,0.59)]'>
               <div>
                    <label className='font-semibold text-xl'>Add Expense</label>
                    <div className="border border-[#4848485e] flex-grow"></div>
               </div>
               <div className='w-full gap-2 columns-4 py-5'>
                    <SelectOption
                         label={'Select Type'}
                         options={selectOption}
                         value={value}
                         onChange={handleChange}
                    />
                    <div>
                         <input
                              type='text'
                              className='px-2 py-2 my-1 rounded border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]'
                              placeholder='Type Subcategory'
                         />
                    </div>
                    <div>
                         <input
                              type='datetime-local'
                              className='px-2 py-2 rounded border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]'
                         />
                    </div>
                    <div>
                         <input
                              type='type'
                              className='px-2 py-2 my-1 rounded border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]'
                              placeholder='Enter Amount'
                         />
                    </div>
                    <div>
                         <input
                              type='type'
                              className='px-2 py-2 rounded border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]'
                              placeholder='Remarks'
                         />
                    </div>
                    <div>
                         <input
                              type='file'
                              className='px-2 py-2 my-1 rounded border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]'
                         />
                         <Button
                              label={'Add'}
                              className={"ml-3 text-sm rounded-none text-white px-2 py-1 w-20 justify-center bg-[#4f8dca] hover:bg-[#4f8dca]/100 focus:ring-2 focus:outline-none focus:ring-[#4f8dca]/60 font-medium text-center inline-flex items-center dark:focus:ring-[#4f8dca]/60"}
                         />
                    </div>
               </div>
          </div>
     )
}

export default AddExpense