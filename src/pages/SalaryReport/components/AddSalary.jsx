// import React from 'react'

import Button from "../../../common-components/Button"

const AddSalary = () => {
  return (
    <div className="-mt-6">
     <Button
     label={'Create Employee Salary'}
     className='float-right ml-3 text-sm mb-3 rounded-none text-white px-2 py-1 w-50 justify-center bg-[#07be6e] hover:bg-[#07be6e]/100 focus:ring-2 focus:outline-none focus:ring-[#07be6e]/60 font-medium text-center inline-flex items-center dark:focus:ring-[#07be6e]/60'
     />
    </div>
  )
}

export default AddSalary