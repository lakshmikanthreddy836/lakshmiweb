// import React from 'react'
import Button from '../../../common-components/Button';
import SelectOption from '../../../common-components/SelectOption'

const AddFood = () => {
     const FoodType = [
          { id: 1, label: 'Biryani', value: 'Biryani' },

          { id: 2, label: 'Dal', value: 'Dal' },

          { id: 3, label: 'Rice', value: 'Rice' },
     ];
     const PaymentMode = [
          { id: 1, label: 'veg', value: 'veg' },

          { id: 2, label: 'non-veg', value: 'non-veg' },
     ];
     return (
          <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
               <div className="overflow-y-auto p-3 overflow-visible h-fit">
                    <h2 className="text-2xl font-bold mb-4 text-black">Add Food</h2>
                    <form className='border shadow-[1px_29px_26px_-11px_rgba(189,198,203,0.59)]' >
                         <div className='text-center text-2xl font-bold p-3'>
                              <label>Add New Food</label>
                         </div>
                         <div className='p-4'>
                              <div className='columns-2'>
                                   <div>
                                        <label>Food Name</label>
                                        <div>
                                             <input type='text' className='border rounded p-1 w-[100%] shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2' />
                                        </div>
                                   </div>
                                   <div>
                                        <label>Food Type</label>
                                        <div>
                                             <SelectOption
                                                  label={'select'}
                                                  options={FoodType}
                                                  style="w-[100%] mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div>
                                   <div>
                                        <label>Food Description</label>
                                        <div>
                                             <textarea  className='border rounded p-1 w-[100%] shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2' />
                                        </div>
                                   </div>
                              </div>
                              <div className='columns-2'>
                                   <div>
                                        <label>Available From Time</label>
                                        <div>
                                             <input type='time' className='border rounded p-1 w-[100%] shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2' />
                                        </div>
                                   </div>
                                   <div>
                                        <label>To Time</label>
                                        <div>
                                             <input type='time' className='border rounded p-1 w-[100%] shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2' />
                                        </div>
                                   </div>

                              </div>
                              <div className='columns-2'>
                                   <div>
                                        <label>Select Category</label>
                                        <div>
                                             <SelectOption
                                                  label={'select'}
                                                  options={PaymentMode}
                                                  style="w-[70%] mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
                                             />
                                        </div>
                                   </div>
                                   <div>
                                        <label>Product Image</label>
                                        <div>
                                             <input type='file' className='border rounded p-1 shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2' />
                                        </div>
                                   </div>
                              </div>
                              <div className='text-center'>
                                   <Button
                                        label={'Add Now'}
                                        style='text-white py-2 px-6 bg-[#ff0018]'
                                   />
                              </div>
                         </div>
                    </form>
               </div>
          </div>
     )
}

export default AddFood