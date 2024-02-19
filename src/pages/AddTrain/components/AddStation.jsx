import React from 'react'
import Button from '../../../common-components/Button'

const AddStation = () => {
  return (
    <div className="w-full h-fit addtrainboxshadow mt-10 mx-[2px] flex flex-col gap-3 p-2">
      <div className="flex items-center justify-center">
        <b className="text-[1.5em]">
        Add Station
        </b>
      </div>
      <div className="flex flex-row justify-between w-full gap-3">
        <div className="flex flex-col w-full gap-2">
          <p className="text-[15px] font-medium">Station Name</p>
          <input
            type="text"
            className="w-full h-8 border-[1px] bg-white border-[#aaa] rounded-[4px]"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <p className="text-[15px] font-medium">Station Code</p>
          <input
            type="text"
            className="w-full h-8 border-[1px] bg-white border-[#aaa] rounded-[4px]"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <Button
          label={"Add Now"}
          style={
            "bg-red-500 h-10 w-[100px] text-white text-[15px] rounded-[5px] font-medium hover:bg-red-700"
          }
        />
      </div>
    </div>
  )
}

export default AddStation