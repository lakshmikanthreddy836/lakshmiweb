import React from 'react';
import DataTable from '../../../common-components/DataTable';
import { TiTick } from 'react-icons/ti';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const tableData = [
  {
    id: 1,
    Train_Name: 'POORVA EXP',
    Train_number: '12304',
    action: false,
  },
  {
    id: 2,
    Train_Name: 'POORVA EXP',
    Train_number: '12304',
    action: false,
  },
  {
    id: 3,
    Train_Name: 'POORVA EXP',
    Train_number: '12304',
    action: false,
  },
  {
    id: 4,
    Train_Name: 'POORVA EXP',
    Train_number: '12304',
    action: false,
  },
  {
    id: 5,
    Train_Name: 'POORVA EXP',
    Train_number: '12304',
    action: false,
  },
];

const ActionRender = ({ value }) => (
  <span
    style={{
      display: 'flex',
      height: '100%',
      width: '100%',
      alignItems: 'center',
    }}>
    <FaRegEdit className='text-blue-500 text-2xl' />
    <MdDelete className='text-red-500 text-2xl' />
  </span>
);

const tableColumns = [
  { field: 'id' },
  { field: 'Train_Name' },
  { field: 'Train_number' },
  { field: 'action', cellRenderer: ActionRender },
];

function GridTable() {
  return (
    <div className='relative overflow-x-auto'>
      <DataTable colDefs={tableColumns} rowData={tableData} />
    </div>
  );
}

export default GridTable;
