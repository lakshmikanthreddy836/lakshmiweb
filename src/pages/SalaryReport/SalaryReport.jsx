// import React from 'react'
import DatatableSalary from './components/DatatableSalary'
import AddSalary from './components/AddSalary'

const SalaryReport = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <div className='border px-5 py-3 mb-8 shadow-[1px_10px_10px_3px_rgba(214,225,214,0.59)] rounded-md'>
          <h2 className='text-2xl font-bold text-black -mb-31'>Expense Report</h2>
          <AddSalary />
        </div>
        <DatatableSalary />
      </div>
    </div>
  )
}

export default SalaryReport