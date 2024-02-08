import React from 'react';
import Title from '../../common-components/Title';
import GridTable from './components/GridTable';
import Button from '../../common-components/Button';
import { FaPlus } from 'react-icons/fa';

const AddTrain = () => {
  return (
      <div className='bg-white pl-4 h-full'>
        <div className='p-2 items-center'>
          <Title title={'Add Train'}></Title>
        </div>

        {/*  */}
        <div className='px-5 grid items-center justify-center md:grid-cols-6 sm:grid-cols-12 sm  gap-3 py-3 shadow-lg'>
          <Button className='text-white bg-red-500'>
            <span>Train List</span>
          </Button>
          <Button className='text-black bg-gray-300'>
            <span className='flex items-center justify-center text-xs'>
              <FaPlus className='mx-1 text-xs' />
              Add Train
            </span>
          </Button>
          <Button className='text-black bg-gray-300'>
            <span className='flex items-center justify-center text-xs'>
              <FaPlus className='mx-1 text-xs' />
              Import Train
            </span>
          </Button>
          <div className='mx-6'></div>
          <Button className='text-black bg-gray-300'>
            <span className='flex items-center justify-center text-xs'>
              Station list
            </span>
          </Button>
          <Button className='text-black bg-gray-300'>
            <span className='flex items-center justify-center text-xs'>
              <FaPlus className='mx-1 text-xs' />
              Add station
            </span>
          </Button>
        </div>

        {/* Table */}
        <GridTable />
      </div>
  );
};

export default AddTrain;
