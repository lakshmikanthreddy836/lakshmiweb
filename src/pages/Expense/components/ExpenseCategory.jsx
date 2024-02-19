// import React from 'react'
import { FaTrash, FaCheck  } from "react-icons/fa";
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
          <div className='float-right overflow-x-auto w-6/12 border-2 px-3 py-3 mr-2 -mt-20'>
               <div className="mb-2">
                    <label>Expense Category</label>
                    <div className="border-t-1 border-b-2 h-2 border-[#0000ff] flex-grow"></div>
               </div>              
               <div className='table w-full border border-[#dee2e6] text-centre'>
                    <div className='table-header-group'>
                         <div className='table-row font-semibold text-[#060912] w-10 h-3 text-center'>
                              <div className='table-cell border-2 border-[#dee2e6]'>
                                   <p>S.no</p>
                              </div>
                              <div className='table-cell border-2 border-[#dee2e6]'>
                                   <p>Type</p>
                              </div>
                              <div className='table-cell border-2 border-[#dee2e6]'>
                                   <p>Action</p>
                              </div>
                         </div>
                    </div>
                    {tableData?.map((items, index) => {
                         console.log(items);
                         return (
                              <div className='table-row' key={index}>
                                   <div className='table-cell border-2 border-[#dee2e6] w-10 text-center h-3'>
                                        <p>{items["S.no"]}</p>
                                   </div>
                                   <div className='table-cell border-2 border-[#dee2e6] w-2/12 text-center h-3'>
                                        {/* <p>{items.Type}</p> */}
                                        <input type='text' value={items.Type} className="w-80 m-2 border-2"></input>
                                   </div>
                                   <div className='table-cell border-2 border-[#dee2e6] w-10 text-center h-3'>
                                        {/* <p>{items.Action}</p> */}
                                        <div>
                                             <Button
                                             label={<FaCheck />}
                                             />
                                             <Button
                                             label={<FaTrash/>}
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