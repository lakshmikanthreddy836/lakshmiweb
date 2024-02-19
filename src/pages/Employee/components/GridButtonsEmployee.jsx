// import React from 'react'
import Button from '../../../common-components/Button'

const GridButtonsEmployee = () => {
  return (
    <div>
      <div className="mt-2 px-2 py-2">
        <h5 className="text-2xl mb-4 font-medium float-left">Employee</h5>
        <Button
          label='+ Add Employee'
          className="float-right text-sm rounded-none text-white px-2 py-1 bg-[#ff0018] hover:bg-[#ff0018]/100 focus:ring-2 focus:outline-none focus:ring-[#ff0018]/60 font-medium text-center inline-flex items-center dark:focus:ring-[#ff0018]/60"
        />
      </div>
      <div className='px-2'>
        <div>
          <p>Show:</p>
        </div>
        <div className='float-right px-2 py-2'>
          <label>Search :</label>
          <input
            type="text"
            placeholder="Search"
            className="md:w-40 mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 sm:text-sm focus:ring-2"
          />
        </div>
      </div>
    </div>
  )
}

export default GridButtonsEmployee