// import React from 'react'

import Button from "../../../common-components/Button"

const AddCategory = () => {
  return (
    <div className="w-5/12 border-2 px-3 py-3 -mb-6 mt-4">
     <div className="px-2 py-2">
          <label>Add Category</label>
          <div className="border-t-1 border-b-2 h-2 border-[#0000ff] flex-grow"></div>
     </div>
     <div>
          <input
           type="text"
           className="border-2 w-80"
           />
           <Button
           label={'Save'}
           className="ml-3 text-sm rounded-none text-white px-2 py-1 bg-[#ff0018] hover:bg-[#ff0018]/100 focus:ring-2 focus:outline-none focus:ring-[#ff0018]/60 font-medium text-center inline-flex items-center dark:focus:ring-[#ff0018]/60"
           />
     </div>
    </div>
  )
}

export default AddCategory