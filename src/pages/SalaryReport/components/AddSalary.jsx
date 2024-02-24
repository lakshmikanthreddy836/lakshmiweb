// import React from 'react'

import Button from "../../../common-components/Button"
import SelectOption from "../../../common-components/SelectOption";
import { FaXmark } from "react-icons/fa6";

const AddSalary = () => {

  const SelectType = [
    { id: 1, label: 'Expense', value: 'Expense' },
  ];

  const SelectCategory = [
    { id: 1, label: 'Salary', value: 'Salary' },
  ];

  const SelectEmployee = [
    { id: 1, label: 'Neha Mishra - Customer care Executive', value: 'NehaMishra' },

    { id: 2, label: 'Prem Kumar Jha - Customer care Executive', value: 'PremKumarJha' },
  ];

  const SelectMonth = [
    { id: 1, label: 'January', value: 'January' },

    { id: 2, label: 'February', value: 'February' },

    { id: 3, label: 'March', value: 'March' },
  ];

  const handleClickAddSalary = () => {
    let salaryModle = document.getElementById('AddSalaryModal');
    salaryModle.style.display = 'block';
  };

  const handleCloseSalary = () => {
    let salaryModle = document.getElementById('AddSalaryModal');
    salaryModle.style.display = 'none';
  };
  return (
    <div className="-mt-6">
      <Button
        label={'Create Employee Salary'}
        handleClick={handleClickAddSalary}
        style='float-right ml-3 text-sm mb-3 rounded-none text-white px-2 py-1 w-50 justify-center bg-[#07be6e] hover:bg-[#07be6e]/100 focus:ring-2 focus:outline-none focus:ring-[#07be6e]/60 font-medium text-center inline-flex items-center dark:focus:ring-[#07be6e]/60'
      />
      <div id="AddSalaryModal" className='hidden fixed z-[1] overflow-auto w-full h-full bg-[rgba(0,0,0,0.4)] top-0 left-0'>
        <div id="AddSalaryContent" className='bg-[#fefefe] w-[68%] p-0 m-auto mt-9'>
          <div className="bg-[#000000]">
            <Button
              label={<FaXmark />}
              style='float-right text-2xl font-semibold p-4'
              handleClick={handleCloseSalary}
            />
            <h5 className="p-4 text-xl text-white font-semibold">Add Employee Salary</h5>
          </div>
          <div className="p-6">
            <div className="columns-4">
              <div>
                <SelectOption
                  label={'Select Type'}
                  options={SelectType}
                  style="w-60 mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
                />
              </div>
              <div>
                <SelectOption
                  label={'Select Category'}
                  options={SelectCategory}
                  style="w-60 mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
                />
              </div>
              <div>
                <SelectOption
                  label={'Select Employee'}
                  options={SelectEmployee}
                  style="w-60 mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
                />
              </div>
              <div>
                <SelectOption
                  label={'Select Month'}
                  options={SelectMonth}
                  style="w-60 mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
                />
              </div>
            </div>
            <div className="columns-4">
              <div>
                <label>Date *</label>
                <div>
                  <input type="date" required className="border rounded p-1 shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2" />
                </div>
              </div>
              <div>
                <label>Amount *</label>
                <div>
                  <input type="text" required className="border rounded p-1 shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2" placeholder="Enter Amount"/>
                </div>
              </div>
              <div>
                <label>Paid</label>
                <div>
                  <input type="text" className="border rounded p-1 shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2" />
                </div>
              </div>
              <div>
                <label>Repaid</label>
                <div>
                  <input type="text" className="border rounded p-1 shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2" />
                </div>
              </div>
            </div>
            <div className="columns-3">
              <div>
                <label>Dues</label>
                <div>
                  <input type="float" className="border rounded p-1 shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2" />
                </div>
              </div>
              <div>
                <label>Remark</label>
                <div>
                  <input type="text" className="border rounded p-1 w-full" placeholder="Remarks shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2"/>
                </div>
              </div>
              <div>
                <label>Upload File<span className="text-xs">(if any)</span></label>
                <div>
                  <input type="file" className="border rounded p-1 shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2" />
                </div>
              </div>
            </div>
            <div className="columns-1">
              <Button
                label={'Submit'}
                style='bg-[#4f8dca] py-1 px-4 text-white'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddSalary