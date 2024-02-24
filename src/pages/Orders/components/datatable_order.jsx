// import * as React from 'react';
// import SelectOption from '../../../common-components/SelectOption';

const Datatable_Order = () => {

     // const StationOptions = [
     //      { id: 1, label: 'Freemium', value: 'Freemium' },

     //      { id: 2, label: 'Free', value: 'Free' },

     //      { id: 3, label: 'Paid', value: 'Paid' },
     // ];

     // const [value, setValue] = React.useState('');

     // const handleChange = (event) => {
     //      setValue(event.target.value);
     // };
     return (
          <div className="overflow-x-auto  h-fit mx-auto px-4 sm:px-6 lg:px-8 py-0">
               <div className="flex flex-1  px-4 py-3 bg-white">
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-end">
                         <div
                              className="relative z-0 flex justify-between w-80 -space-x-px rounded-md"
                              aria-label="Pagination"
                         >
                              {/* <select
                                   id="pricingType"
                                   name="pricingType"
                                   placeholder="Time Within"
                                   value={value}
                                   onChange={handleChange}
                                   className=" border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                              >
                                   {StationOptions.map((option) => (
                                        <option value={option.value} key={option.id}>{option.label}</option>
                                   ))}
                              </select> */}
                              {/* <SelectOption
                              label={label}
                              options={options}
                              value={value}
                              onChange={handleChange}
                              /> */}
                              <label className="mt-2 ml-20">Search</label>
                              <input
                                   type="text"
                                   placeholder="Search"
                                   className="md:w-40 mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 sm:text-sm focus:ring-2"
                              />
                         </div>
                    </div>
               </div>
               <table id="example" className="table-auto w-full">
                    <thead>
                         <tr className="text-black bg-[#00e1ff] text-[14px]">
                              <th className="px-4 py-2">@</th>
                              <th className="px-4 py-2">#</th>
                              <th className="px-4 py-2">Order ID</th>
                              <th className="px-4 py-2">Customer Name</th>
                              <th className="px-4 py-2">Mobile</th>
                              <th className="px-4 py-2">Station Name</th>
                              <th className="px-4 py-2">Train No</th>
                              <th className="px-4 py-2">Pay Mode</th>
                              <th className="px-4 py-2">Restaurant Name (State)</th>
                              <th className="px-4 py-2">Price</th>
                              <th className="px-4 py-2">Status</th>
                              <th className="px-4 py-2">DOD</th>
                              <th className="px-4 py-2">Booking Date</th>
                              <th className="px-4 py-2">Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr className="text-center">
                              <td className="border px-4 py-2">
                                   <input type="checkbox" className=" " id="checkbox-1" checked />
                              </td>
                              <td className="border px-4 py-2">1</td>
                              <td className="border px-4 py-2">RK6133131</td>
                              <td className="border px-4 py-2">Anjana Ahluwalia</td>
                              <td className="border px-4 py-2">9310108157</td>
                              <td className="border px-4 py-2">Kota Junction (KOTA)</td>
                              <td className="border px-4 py-2">12283</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        COD
                                   </p>
                              </td>
                              <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
                              <td className="border px-4 py-2">246.7</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        Cancelled
                                   </p>
                              </td>
                              <td className="border px-4 py-2">2011/04/25</td>
                              <td className="border px-4 py-2">07-12-202304:54:00AM</td>
                              <td className="border px-4 py-2">
                                   <svg
                                        className="w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                   </svg>
                              </td>
                         </tr>
                         <tr className="text-center">
                              <td className="border px-4 py-2">
                                   <input type="checkbox" className=" " id="checkbox-1" checked />
                              </td>
                              <td className="border px-4 py-2">1</td>
                              <td className="border px-4 py-2">RK6133131</td>
                              <td className="border px-4 py-2">Anjana Ahluwalia</td>
                              <td className="border px-4 py-2">9310108157</td>
                              <td className="border px-4 py-2">Kota Junction (KOTA)</td>
                              <td className="border px-4 py-2">12283</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        COD
                                   </p>
                              </td>
                              <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
                              <td className="border px-4 py-2">246.7</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        Cancelled
                                   </p>
                              </td>
                              <td className="border px-4 py-2">2011/04/25</td>
                              <td className="border px-4 py-2">07-12-202304:54:00AM</td>
                              <td className="border px-4 py-2">
                                   <svg
                                        className="w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                   </svg>
                              </td>
                         </tr>
                         <tr className="text-center">
                              <td className="border px-4 py-2">
                                   <input type="checkbox" className=" " id="checkbox-1" checked />
                              </td>
                              <td className="border px-4 py-2">1</td>
                              <td className="border px-4 py-2">RK6133131</td>
                              <td className="border px-4 py-2">Anjana Ahluwalia</td>
                              <td className="border px-4 py-2">9310108157</td>
                              <td className="border px-4 py-2">Kota Junction (KOTA)</td>
                              <td className="border px-4 py-2">12283</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        COD
                                   </p>
                              </td>
                              <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
                              <td className="border px-4 py-2">246.7</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        Cancelled
                                   </p>
                              </td>
                              <td className="border px-4 py-2">2011/04/25</td>
                              <td className="border px-4 py-2">07-12-202304:54:00AM</td>
                              <td className="border px-4 py-2">
                                   <svg
                                        className="w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                   </svg>
                              </td>
                         </tr>
                         <tr className="text-center">
                              <td className="border px-4 py-2">
                                   <input type="checkbox" className=" " id="checkbox-1" checked />
                              </td>
                              <td className="border px-4 py-2">1</td>
                              <td className="border px-4 py-2">RK6133131</td>
                              <td className="border px-4 py-2">Anjana Ahluwalia</td>
                              <td className="border px-4 py-2">9310108157</td>
                              <td className="border px-4 py-2">Kota Junction (KOTA)</td>
                              <td className="border px-4 py-2">12283</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        COD
                                   </p>
                              </td>
                              <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
                              <td className="border px-4 py-2">246.7</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        Cancelled
                                   </p>
                              </td>
                              <td className="border px-4 py-2">2011/04/25</td>
                              <td className="border px-4 py-2">07-12-202304:54:00AM</td>
                              <td className="border px-4 py-2">
                                   <svg
                                        className="w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                   </svg>
                              </td>
                         </tr>
                         <tr className="text-center">
                              <td className="border px-4 py-2">
                                   <input type="checkbox" className=" " id="checkbox-1" checked />
                              </td>
                              <td className="border px-4 py-2">1</td>
                              <td className="border px-4 py-2">RK6133131</td>
                              <td className="border px-4 py-2">Anjana Ahluwalia</td>
                              <td className="border px-4 py-2">9310108157</td>
                              <td className="border px-4 py-2">Kota Junction (KOTA)</td>
                              <td className="border px-4 py-2">12283</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        COD
                                   </p>
                              </td>
                              <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
                              <td className="border px-4 py-2">246.7</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        Cancelled
                                   </p>
                              </td>
                              <td className="border px-4 py-2">2011/04/25</td>
                              <td className="border px-4 py-2">07-12-202304:54:00AM</td>
                              <td className="border px-4 py-2">
                                   <svg
                                        className="w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                   </svg>
                              </td>
                         </tr>
                         <tr className="text-center">
                              <td className="border px-4 py-2">
                                   <input type="checkbox" className=" " id="checkbox-1" checked />
                              </td>
                              <td className="border px-4 py-2">1</td>
                              <td className="border px-4 py-2">RK6133131</td>
                              <td className="border px-4 py-2">Anjana Ahluwalia</td>
                              <td className="border px-4 py-2">9310108157</td>
                              <td className="border px-4 py-2">Kota Junction (KOTA)</td>
                              <td className="border px-4 py-2">12283</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        COD
                                   </p>
                              </td>
                              <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
                              <td className="border px-4 py-2">246.7</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        Cancelled
                                   </p>
                              </td>
                              <td className="border px-4 py-2">2011/04/25</td>
                              <td className="border px-4 py-2">07-12-202304:54:00AM</td>
                              <td className="border px-4 py-2">
                                   <svg
                                        className="w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                   </svg>
                              </td>
                         </tr>
                         <tr className="text-center">
                              <td className="border px-4 py-2">
                                   <input type="checkbox" className=" " id="checkbox-1" checked />
                              </td>
                              <td className="border px-4 py-2">1</td>
                              <td className="border px-4 py-2">RK6133131</td>
                              <td className="border px-4 py-2">Anjana Ahluwalia</td>
                              <td className="border px-4 py-2">9310108157</td>
                              <td className="border px-4 py-2">Kota Junction (KOTA)</td>
                              <td className="border px-4 py-2">12283</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        COD
                                   </p>
                              </td>
                              <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
                              <td className="border px-4 py-2">246.7</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        Cancelled
                                   </p>
                              </td>
                              <td className="border px-4 py-2">2011/04/25</td>
                              <td className="border px-4 py-2">07-12-202304:54:00AM</td>
                              <td className="border px-4 py-2">
                                   <svg
                                        className="w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                   </svg>
                              </td>
                         </tr>
                         <tr className="text-center">
                              <td className="border px-4 py-2">
                                   <input type="checkbox" className=" " id="checkbox-1" checked />
                              </td>
                              <td className="border px-4 py-2">1</td>
                              <td className="border px-4 py-2">RK6133131</td>
                              <td className="border px-4 py-2">Anjana Ahluwalia</td>
                              <td className="border px-4 py-2">9310108157</td>
                              <td className="border px-4 py-2">Kota Junction (KOTA)</td>
                              <td className="border px-4 py-2">12283</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        COD
                                   </p>
                              </td>
                              <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
                              <td className="border px-4 py-2">246.7</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        Cancelled
                                   </p>
                              </td>
                              <td className="border px-4 py-2">2011/04/25</td>
                              <td className="border px-4 py-2">07-12-202304:54:00AM</td>
                              <td className="border px-4 py-2">
                                   <svg
                                        className="w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                   </svg>
                              </td>
                         </tr>
                         <tr className="text-center">
                              <td className="border px-4 py-2">
                                   <input type="checkbox" className=" " id="checkbox-1" checked />
                              </td>
                              <td className="border px-4 py-2">1</td>
                              <td className="border px-4 py-2">RK6133131</td>
                              <td className="border px-4 py-2">Anjana Ahluwalia</td>
                              <td className="border px-4 py-2">9310108157</td>
                              <td className="border px-4 py-2">Kota Junction (KOTA)</td>
                              <td className="border px-4 py-2">12283</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        COD
                                   </p>
                              </td>
                              <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
                              <td className="border px-4 py-2">246.7</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        Cancelled
                                   </p>
                              </td>
                              <td className="border px-4 py-2">2011/04/25</td>
                              <td className="border px-4 py-2">07-12-202304:54:00AM</td>
                              <td className="border px-4 py-2">
                                   <svg
                                        className="w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                   </svg>
                              </td>
                         </tr>
                         <tr className="text-center">
                              <td className="border px-4 py-2">
                                   <input type="checkbox" className=" " id="checkbox-1" checked />
                              </td>
                              <td className="border px-4 py-2">1</td>
                              <td className="border px-4 py-2">RK6133131</td>
                              <td className="border px-4 py-2">Anjana Ahluwalia</td>
                              <td className="border px-4 py-2">9310108157</td>
                              <td className="border px-4 py-2">Kota Junction (KOTA)</td>
                              <td className="border px-4 py-2">12283</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        COD
                                   </p>
                              </td>
                              <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
                              <td className="border px-4 py-2">246.7</td>
                              <td className="border px-4 py-2">
                                   <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                                        Cancelled
                                   </p>
                              </td>
                              <td className="border px-4 py-2">2011/04/25</td>
                              <td className="border px-4 py-2">07-12-202304:54:00AM</td>
                              <td className="border px-4 py-2">
                                   <svg
                                        className="w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                   </svg>
                              </td>
                         </tr>
                    </tbody>
               </table>
          </div>
     );
};
export default Datatable_Order;
