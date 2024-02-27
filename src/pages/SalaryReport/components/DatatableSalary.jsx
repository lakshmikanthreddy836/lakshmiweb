// import React from 'react'

const tableData = [
  {
    '#': 1,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 2,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
];

function DatatableSalary() {
  return (
    <div className='relative overflow-x-auto w-90 border px-3 py-3 rounded shadow-[1px_29px_26px_-11px_rgba(189,198,203,0.59)]'>
      <div className='px-2 py-2'>
        <h2 className='text-2xl font-bold text-black'>Salary Report</h2>
      </div>
      <div>
      <div className="flex items-center gap-2 text-black">
            <p>Show</p>
            <div>
              <select
                id="pricingType"
                name="pricingType"
                className="mt-1 ml-2 px-1 h-8 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none  rounded-md text-[15px]"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <p>entries</p>
          </div>
      <div className="example-header float-right  mt-[-43px] px-2 py-2 text-black flex justify-end items-center p-2">
        <span>Search :</span>
        <input
          type="text"
          id="filter-text-box"
          placeholder="Filter..."
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1.5"
        // onInput={onFilterTextBoxChanged}
        />
      </div>
      </div>
      <div className='table w-full border-[#dee2e6] text-align-centre'>
        <div className='table-header-group shadow-[3px_3px_3px_3px_rgba(189,198,203,0.59)]'>
          <div className='table-row font-bold'>
            <div className='table-cell border border-[#dee2e6]'>
              <p>#</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Images</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Food Name</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Food Description</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Category</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Food Type</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Update</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Time</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Status</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Action</p>
            </div>
          </div>
        </div>
        {tableData?.map((items, index) => {
          console.log(items);
          return (
            <div className='table-row' key={index}>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items['#']}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items.Images}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items['Food Name']}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items['Food Description']}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items.Category}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items['Food Type']}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items.Update}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items.Time}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items.Status}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items.Action}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DatatableSalary