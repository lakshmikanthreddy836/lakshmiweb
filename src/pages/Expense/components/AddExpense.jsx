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
          <div>
               <div>
                    <label>Add Expense</label>
                    <div className="border-t-1 border-b-2 h-2 border-[#0000ff] flex-grow"></div>
               </div>
               <div className='w-90'>
                    <SelectOption
                         label={'Select Type'}
                         options={selectOption}
                         value={value}
                         onChange={handleChange}
                    />
                    <input
                         type='text'
                         className='border-2'
                         placeholder='Type Subcategory'
                    />
                    <input
                         type='datetime-local'
                         className='border-2'
                    />
                    <input
                         type='type'
                         className='border-2'
                         placeholder='Enter Amount'
                    />
                    <input
                         type='type'
                         className='border-2'
                         placeholder='Remarks'
                    />
                    <input
                         type='file'
                         className='border-2'
                    />
                    <Button
                         label={'Add'}
                         className={"ml-3 text-sm rounded-none text-white px-2 py-1 bg-[#ff0018] hover:bg-[#ff0018]/100 focus:ring-2 focus:outline-none focus:ring-[#ff0018]/60 font-medium text-center inline-flex items-center dark:focus:ring-[#ff0018]/60"}
                    />
               </div>
          </div>
     )
}

export default AddExpense