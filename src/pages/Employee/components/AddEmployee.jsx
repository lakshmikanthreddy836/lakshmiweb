// import React from 'react'

import Button from "../../../common-components/Button"
import SelectOption from "../../../common-components/SelectOption";
import { FaXmark } from "react-icons/fa6";

const AddEmployee = () => {

     const SelectGender = [
          { id: 1, label: 'Male', value: 'Male' },

          { id: 2, label: 'Female', value: 'Female' },

          { id: 3, label: 'Transgender', value: 'Transgender' },
     ];

     const handleClickAddEmployee = () => {
          let emplyeeModle = document.getElementById('AddEmployeeModal');
          emplyeeModle.style.display = 'block';
     };

     const handleCloseEmployee = () => {
          let emplyeeModle = document.getElementById('AddEmployeeModal');
          emplyeeModle.style.display = "none";
     };
     return (
          <div>
               <Button
                    label='+ Add Employee'
                    handleClick={handleClickAddEmployee}
                    style="float-right text-sm rounded-none text-white px-2 py-1 bg-[#ff0018] hover:bg-[#ff0018]/100 focus:ring-2 focus:outline-none focus:ring-[#ff0018]/60 font-medium text-center inline-flex items-center dark:focus:ring-[#ff0018]/60"
               />
               <div className="container mx-auto">
                    <div id="AddEmployeeModal" className='hidden fixed z-[1] overflow-auto w-full h-full bg-[rgba(0,0,0,0.4)] top-0 left-0'>
                         <div id="AddEmployeeContent" className='bg-[#fefefe] w-[60%] p-0 m-auto mt-9'>
                              <Button
                                   label={<FaXmark />}
                                   style='float-right text-2xl font-semibold p-4'
                                   handleClick={handleCloseEmployee}
                              />
                              <h5 className="text-base font-semibold p-4">Add New Employee</h5>
                              <div className="border border-[#4848485e] flex-grow"></div>
                              <div className="p-5">
                              <div className="columns-3">
                                   <div>
                                        <label>Joining Date *</label>
                                        <div className="p-1">
                                             <input type="date" required className="border rounded p-1"/>
                                        </div>
                                   </div>
                                   <div>
                                        <label>Name *</label>
                                        <div className="p-1">
                                             <input type="text" required  className="border rounded p-1"/>
                                        </div>
                                   </div>
                                   <div>
                                        <label>Date Of Birth *</label>
                                        <div className="p-1">
                                             <input type="date" required  className="border rounded p-1"/>
                                        </div>
                                   </div>
                              </div>
                              <div className="columns-3">
                                   <div>
                                        <label>Designation *</label>
                                        <div className="p-1">
                                             <input type="text" required  className="border rounded p-1"/>
                                        </div>
                                   </div>
                                   <div>
                                        <label>Role</label>
                                        <div className="p-1">
                                             <input type="text"  className="border rounded p-1"/>
                                        </div>
                                   </div>
                                   <div>
                                        <label>Gender *</label>
                                        <div>
                                             <SelectOption
                                                  label={'Select Gender'}
                                                  options={SelectGender}
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div className="columns-3">
                                   <div>
                                        <label>Phone *</label>
                                        <div className="p-1">
                                             <input type="number" required  className="border rounded p-1"/>
                                        </div>
                                   </div>
                                   <div>
                                        <label>Username(E-mail) *</label>
                                        <div className="p-1">
                                             <input type="email" required  className="border rounded p-1"/>
                                        </div>
                                   </div>
                                   <div>
                                        <label>Password *</label>
                                        <div className="p-1">
                                             <input type="password" required  className="border rounded p-1"/>
                                        </div>
                                   </div>
                              </div>
                              <div className="columns-3">
                                   <div>
                                        <label>Emergency Contact</label>
                                        <div className="p-1">
                                             <input type="number"  className="border rounded p-1"/>
                                        </div>
                                   </div>
                                   <div>
                                        <label>Person Name</label>
                                        <div className="p-1">
                                             <input type="text"  className="border rounded p-1"/>
                                        </div>
                                   </div>
                                   <div>
                                        <label>Relation</label>
                                        <div className="p-1">
                                             <input type="text"  className="border rounded p-1"/>
                                        </div>
                                   </div>
                              </div>
                              <div className="columns-3">
                                   <div>
                                        <label>Marital Status</label>
                                        <div className="p-1">
                                             <input type="text"  className="border rounded p-1"/>
                                        </div>
                                   </div>
                                   <div>
                                        <label>Qualification</label>
                                        <div className="p-1">
                                             <input type="text"  className="border rounded p-1"/>
                                        </div>
                                   </div>
                                   <div>
                                        <label>Short Intro</label>
                                        <div className="p-1">
                                             <input type="text"  className="border rounded p-1"/>
                                        </div>
                                   </div>
                              </div>
                              <div className="columns-3">
                                   <div>
                                        <label>Address *</label>
                                        <div className="p-1">
                                             <input type="text" required  className="border rounded p-1"/>
                                        </div>
                                   </div>
                                   <div>
                                        <label>Profile Image</label>
                                        <div className="p-1">
                                             <input type="file"  className="border rounded p-1"/>
                                        </div>
                                   </div>
                                   <div>
                                        <div>
                                             <Button
                                                  label={'Add Employee'}
                                                  style='bg-[#ff0018] px-14 py-2 text-white text-base mt-4'
                                             />
                                        </div>
                                   </div>
                              </div>
                              </div>                              
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default AddEmployee