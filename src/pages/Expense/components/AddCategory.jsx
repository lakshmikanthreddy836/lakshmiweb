// import React from 'react'

import Button from "../../../common-components/Button"

const AddCategory = () => {
     return (
          <div className="w-5/12 border px-3 py-3 -mb-6 mt-4 shadow-[1px_29px_26px_-11px_rgba(189,198,203,0.59)] rounded-md">
               <div className="px-2 py-2">
                    <label className="px-3 py-3 font-semibold text-xl">Add Category</label>
               </div>
               <div className="py-4">
                    <div className="border border-[#4848485e] flex-grow"></div>
               </div>
               <div>
                    <input
                         type="text"
                         className="w-80 py-1 border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
                    />
                    <Button
                         label={'Save'}
                         style="ml-3 text-sm rounded-none text-white px-2 py-1 bg-[#ff0018] hover:bg-[#ff0018]/100 focus:ring-2 focus:outline-none focus:ring-[#ff0018]/60 font-medium text-center inline-flex items-center dark:focus:ring-[#ff0018]/60"
                    />
               </div>
          </div>
     )
}

export default AddCategory