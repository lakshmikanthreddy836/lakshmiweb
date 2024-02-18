// import React from 'react';
// import { FaDownload, FaEye, FaInfo, FaPen, FaPenAlt } from 'react-icons/fa';
// import { TbToolsKitchen3 } from 'react-icons/tb';
import DataTable from '../../../common-components/DataTable';
// import SelectOption from '../../../common-components/SelectOption';

const tableData = [
  {
    '#': 1,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 2,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 3,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 4,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 5,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 6,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 7,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 8,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 9,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 10,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 11,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 12,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 13,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 14,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 15,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 16,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 17,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 18,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
  {
    '#': 19,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    'Category': 'Orlando Executive Airport',
    'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
];

const tableColumns = [
  { field: '#', width: 50 },
  { field: 'Images' },
  { field: 'Food Name' },
  { field: 'Food Description' },
  { field: 'Category' },
  { field: 'Food Type', width: 90 },
  { field: 'Update' },
  { field: 'Time', width: 80 },
  { field: 'Status' },
  { field: 'Action' },
];

function GridTable() {
  return (
    <div className='relative overflow-x-auto w-90'>
      {/* <table
        id='example'
        className='w-full text-sm text-left rtl:text-right text-gray-500 '>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
          <tr>
            <th scope='col' className='px-4 py-2'>
              ID
            </th>
            <th scope='col' className='px-4 py-2'>
              Name
            </th>
            <th scope='col' className='px-4 py-2'>
              Opening Time
            </th>
            <th scope='col' className='px-4 py-2'>
              Closing Time
            </th>
            <th scope='col' className='px-4 py-2'>
              Station
            </th>
            <th scope='col' className='px-4 py-2'>
              Min Order
            </th>
            <th scope='col' className='px-4 py-2'>
              Item No
            </th>
            <th scope='col' className='px-4 py-2'>
              Status
            </th>
            <th scope='col' className='px-4 py-2'>
              Join Date
            </th>
            <th scope='col' className='px-4 py-2'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => {
            return (
              <tr key={data.id} className='bg-white border-b'>
                <td scope='row' className='border px-4 py-2'>
                  {data.id}
                </td>
                <td scope='row' className='border px-4 py-2'>
                  {data.name}
                </td>
                <td scope='row' className='border px-4 py-2'>
                  {data.opening_time}
                </td>
                <td scope='row' className='border px-4 py-2'>
                  {data.closing_time}
                </td>
                <td scope='row' className='border px-4 py-2'>
                  {data.station}
                </td>
                <td scope='row' className='border px-4 py-2'>
                  {data.min_order}
                </td>
                <td scope='row' className='border px-4 py-2'>
                  {data.item_no}
                </td>
                <td scope='row' className='border px-4 py-2'>
                  {data.status}
                </td>
                <td scope='row' className='border px-4 py-2'>
                  {data.join_date}
                </td>
                <td scope='row' className='border px-4 py-2'>
                  <div className='flex flex-wrap'>
                    <button type='button' className='p-0'>
                      <FaEye className='text-blue-500 text-lg' />
                    </button>
                    <button type='button' className='p-0'>
                      <FaPenAlt className='text-blue-500 text-lg' />
                    </button>
                    <button type='button' className='p-0'>
                      <FaDownload className='text-blue-500 text-lg' />
                    </button>
                    <button type='button' className='p-0'>
                      <FaInfo className='text-blue-500 text-lg' />
                    </button>
                    <button type='button' className='p-0'>
                      <TbToolsKitchen3 className='text-blue-500 text-lg' />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      <DataTable colDefs={tableColumns} rowData={tableData} />
    </div>
  );
}

export default GridTable;
