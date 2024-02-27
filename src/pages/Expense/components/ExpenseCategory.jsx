// import React from 'react'
import { FaTrash, FaCheck } from "react-icons/fa";
import Button from "../../../common-components/Button";

const tableData = [
     {
          'S.no': 1,
          'Type': 98,
     },
     {
          'S.no': 2,
          'Type': 98,
     },
     {
          'S.no': 3,
          'Type': 98,
     },
     {
          'S.no': 4,
          'Type': 98,
     },
     {
          'S.no': 5,
          'Type': 98,
     },
     {
          'S.no': 6,
          'Type': 98,
     },
     {
          'S.no': 7,
          'Type': 98,
     },
];

const ExpenseCategory = () => {
     return (
          <div className='float-right overflow-x-auto w-6/12 border px-3 py-3 mr-2 -mt-28 shadow-[-2px_30px_20px_2px_rgba(214,225,214,0.59)] rounded-md'>
               <div className="mb-2">
                    <label className="px-3 py-3 font-semibold text-xl">Expense Category</label>
               </div>
               <div className="py-4">
                    <div className="border border-[#4848485e] flex-grow"></div>
               </div>
               <div className='table w-full border-[#dee2e6] text-centre'>
                    <div className='table-header-group'>
                         <div className='table-row font-semibold text-[#060912] w-10 h-3 text-center'>
                              <div className='table-cell border border-[#dee2e6]'>
                                   <p>S.no</p>
                              </div>
                              <div className='table-cell border border-[#dee2e6]'>
                                   <p>Type</p>
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
                                        <p>{items["S.no"]}</p>
                                   </div>
                                   <div className='table-cell border border-[#dee2e6] w-2/12 text-center h-3'>
                                        {/* <p>{items.Type}</p> */}
                                        <input type='text' value={items.Type} className="w-80 m-2 py-1 border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"></input>
                                   </div>
                                   <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                                        {/* <p>{items.Action}</p> */}
                                        <div>
                                             <Button
                                                  label={<FaCheck className="text-[#3085c1] mx-5" />}
                                             />
                                             <Button
                                                  label={<FaTrash className="text-[#ff0018]" />}
                                             />
                                        </div>
                                   </div>
                              </div>
                         );
                    })}
               </div>
          </div>
     )
}

export default ExpenseCategory