// import React from 'react'
// import Button from "../../../common-components/Button";

const tableData = [
     {
          'Date': 11 - 11 - 11,
          'Type': 'Cash',
          'Category': 'category',
          'Amount': '200',
          'Remark': 'remark',
          'Files': 'files',

     },
];

const ExpenseReport = () => {
     return (
          <div className='overflow-x-auto w-full border-2 px-3 py-3 mr-2'>
               <div className="mb-2">
                    <label>Expense Report</label>
                    <div className="border-t-1 border-b-2 h-2 border-[#0000ff] flex-grow"></div>
               </div>
               <div className='table w-full border border-[#dee2e6] text-centre'>
                    <div className='table-header-group'>
                         <div className='table-row font-semibold text-[#060912] w-10 h-3 text-center'>
                              <div className='table-cell border-2 border-[#dee2e6]'>
                                   <p>Date</p>
                              </div>
                              <div className='table-cell border-2 border-[#dee2e6]'>
                                   <p>Type</p>
                              </div>
                              <div className='table-cell border-2 border-[#dee2e6]'>
                                   <p>Category</p>
                              </div>
                              <div className='table-cell border-2 border-[#dee2e6]'>
                                   <p>Amount</p>
                              </div>
                              <div className='table-cell border-2 border-[#dee2e6]'>
                                   <p>Remark</p>
                              </div>
                              <div className='table-cell border-2 border-[#dee2e6]'>
                                   <p>Files</p>
                              </div>
                         </div>
                    </div>
                    {tableData?.map((items, index) => {
                         console.log(items);
                         return (
                              <div className='table-row' key={index}>
                                   <div className='table-cell border-2 border-[#dee2e6] w-10 text-center h-3'>
                                        <p>{items.Date}</p>
                                   </div>
                                   <div className='table-cell border-2 border-[#dee2e6] w-2/12 text-center h-3'>
                                        <p>{items.Type}</p>
                                   </div>
                                   <div className='table-cell border-2 border-[#dee2e6] w-2/12 text-center h-3'>
                                        <p>{items.Category}</p>
                                   </div>
                                   <div className='table-cell border-2 border-[#dee2e6] w-2/12 text-center h-3'>
                                        <p>{items.Amount}</p>
                                   </div>
                                   <div className='table-cell border-2 border-[#dee2e6] w-2/12 text-center h-3'>
                                        <p>{items.Remark}</p>
                                   </div>
                                   <div className='table-cell border-2 border-[#dee2e6] w-2/12 text-center h-3'>
                                        <p>{items.Files}</p>
                                   </div>
                              </div>
                         );
                    })}
               </div>
          </div>
     )
}

export default ExpenseReport