// import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "../../../common-components/Button";

const tableData = [
     {
          'S.no': 1,
          'JoinDate': 'Dabo Airport',
          'Name': '12/10/2023',
          'Phone': '7/1/2023',
          'Address': 'Orlando Executive Airport',
          'Designation': 98,
          'Action': '2270795180',
     },
     {
          'S.no': 2,
          'JoinDate': 'Dabo Airport',
          'Name': '12/10/2023',
          'Phone': '7/1/2023',
          'Address': 'Orlando Executive Airport',
          'Designation': 98,
          'Action': '2270795180',
     },
     {
          'S.no': 3,
          'JoinDate': 'Dabo Airport',
          'Name': '12/10/2023',
          'Phone': '7/1/2023',
          'Address': 'Orlando Executive Airport',
          'Designation': 98,
          'Action': '2270795180',
     },
     {
          'S.no': 4,
          'JoinDate': 'Dabo Airport',
          'Name': '12/10/2023',
          'Phone': '7/1/2023',
          'Address': 'Orlando Executive Airport',
          'Designation': 98,
          'Action': '2270795180',
     },
     {
          'S.no': 5,
          'JoinDate': 'Dabo Airport',
          'Name': '12/10/2023',
          'Phone': '7/1/2023',
          'Address': 'Orlando Executive Airport',
          'Designation': 98,
          'Action': '2270795180',
     },
     {
          'S.no': 6,
          'JoinDate': 'Dabo Airport',
          'Name': '12/10/2023',
          'Phone': '7/1/2023',
          'Address': 'Orlando Executive Airport',
          'Designation': 98,
          'Action': '2270795180',
     },
     {
          'S.no': 7,
          'JoinDate': 'Dabo Airport',
          'Name': '12/10/2023',
          'Phone': '7/1/2023',
          'Address': 'Orlando Executive Airport',
          'Designation': 98,
          'Action': '2270795180',
     },
];

function GridTableEmployee() {
     return (
          <div className='relative overflow-x-auto w-90 shadow-[41px_9px_17px_9px_rgba(189,198,203,0.59)] rounded-md'>
               <div className='table w-full border-[#dee2e6] text-centre px-3 py-3'>
                    <div className='table-header-group'>
                         <div className='table-row font-semibold text-[#060912] w-10 h-[2.25rem] text-center shadow-[3px_3px_3px_3px_rgba(189,198,203,0.59)]'>
                              <div className='table-cell border border-[#dee2e6]'>
                                   <p>S.no</p>
                              </div>
                              <div className='table-cell border border-[#dee2e6]'>
                                   <p>JoinDate</p>
                              </div>
                              <div className='table-cell border border-[#dee2e6]'>
                                   <p>Name</p>
                              </div>
                              <div className='table-cell border border-[#dee2e6]'>
                                   <p>Phone</p>
                              </div>
                              <div className='table-cell border border-[#dee2e6]'>
                                   <p>Address</p>
                              </div>
                              <div className='table-cell border border-[#dee2e6]'>
                                   <p>Designation</p>
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
                                   <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                                        <p>{items.JoinDate}</p>
                                   </div>
                                   <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                                        <p>{items.Name}</p>
                                   </div>
                                   <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                                        <p>{items.Phone}</p>
                                   </div>
                                   <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                                        <p>{items.Address}</p>
                                   </div>
                                   <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                                        <p>{items.Designation}</p>
                                   </div>
                                   <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                                        <Button
                                             label={<FaEdit />}
                                             className='bg-[#083650] px-3 py-3 text-white text-xl mx-1'
                                        />
                                        <Button
                                             label={<FaTrash />}
                                             className='bg-[#ff0018] px-3 py-3 text-white text-xl'
                                        />
                                   </div>
                              </div>
                         );
                    })}
               </div>
          </div>
     );
}

export default GridTableEmployee