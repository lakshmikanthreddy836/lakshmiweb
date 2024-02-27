// import React from 'react';
import GridTableEmployee from './components/GridTableEmployee';
// import Button from '../../common-components/Button';
import GridButtonsEmployee from './components/GridButtonsEmployee';

const Employee = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <GridButtonsEmployee />
        <GridTableEmployee />
      </div>
    </div>
  )
}

export default Employee