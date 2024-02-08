import React from 'react';
import { FaDownload, FaEye, FaInfo, FaPen, FaPenAlt } from 'react-icons/fa';
import { TbToolsKitchen3 } from 'react-icons/tb';
import DataTable from '../../../common-components/DataTable';

const tableData = [
  {
    id: 1,
    name: 'Las Cruces International Airport',
    opening_time: '6/17/2023',
    closing_time: '4/18/2023',
    station: 'Calabozo Airport',
    min_order: 42,
    item_no: '0481260625',
    status: true,
    join_date: '6/11/2023',
    action: false,
  },
  {
    id: 2,
    name: 'Kristiansund Airport (Kvernberget)',
    opening_time: '3/5/2023',
    closing_time: '12/4/2023',
    station: 'Beatrice Municipal Airport',
    min_order: 74,
    item_no: '9408320840',
    status: true,
    join_date: '6/17/2023',
    action: false,
  },
  {
    id: 3,
    name: 'Everett-Stewart Regional Airport',
    opening_time: '8/29/2023',
    closing_time: '8/26/2023',
    station: 'April Point Seaplane Base',
    min_order: 80,
    item_no: '0425792706',
    status: false,
    join_date: '10/1/2023',
    action: false,
  },
  {
    id: 4,
    name: 'JAGS McCartney International Airport',
    opening_time: '9/13/2023',
    closing_time: '11/6/2023',
    station: 'Thornhill Air Base',
    min_order: 48,
    item_no: '6983883489',
    status: true,
    join_date: '6/3/2023',
    action: false,
  },
  {
    id: 5,
    name: 'Chiquimula Airport',
    opening_time: '7/10/2023',
    closing_time: '3/10/2023',
    station: 'Quthing Airport',
    min_order: 60,
    item_no: '3843602794',
    status: true,
    join_date: '10/9/2023',
    action: true,
  },
  {
    id: 6,
    name: 'Geneina Airport',
    opening_time: '12/13/2023',
    closing_time: '11/23/2023',
    station: 'General Francisco J. Mujica International Airport',
    min_order: 36,
    item_no: '8053518087',
    status: true,
    join_date: '11/17/2023',
    action: true,
  },
  {
    id: 7,
    name: 'Marana Regional Airport',
    opening_time: '5/25/2023',
    closing_time: '11/18/2023',
    station: 'Tiksi Airport',
    min_order: 75,
    item_no: '5672413846',
    status: false,
    join_date: '9/29/2023',
    action: true,
  },
  {
    id: 8,
    name: 'Solovki Airport',
    opening_time: '9/27/2023',
    closing_time: '2/12/2023',
    station: 'Addison Airport',
    min_order: 61,
    item_no: '0909322023',
    status: true,
    join_date: '9/10/2023',
    action: false,
  },
  {
    id: 9,
    name: 'Aalborg Airport',
    opening_time: '5/26/2023',
    closing_time: '5/30/2023',
    station: 'Xingning Airport',
    min_order: 54,
    item_no: '7676367239',
    status: true,
    join_date: '12/21/2023',
    action: false,
  },
  {
    id: 10,
    name: 'German Olano Airport',
    opening_time: '12/20/2023',
    closing_time: '3/12/2023',
    station: 'Wuvulu Island Airport',
    min_order: 24,
    item_no: '1158602391',
    status: false,
    join_date: '10/8/2023',
    action: true,
  },
  {
    id: 11,
    name: 'Fuvahmulah Airport',
    opening_time: '6/18/2023',
    closing_time: '10/11/2023',
    station: 'Roanne-Renaison Airport',
    min_order: 61,
    item_no: '3068079187',
    status: false,
    join_date: '6/9/2023',
    action: true,
  },
  {
    id: 12,
    name: 'Kaédi Airport',
    opening_time: '1/6/2024',
    closing_time: '1/4/2024',
    station: 'Rogue Valley International Medford Airport',
    min_order: 3,
    item_no: '7189506373',
    status: true,
    join_date: '2/2/2024',
    action: false,
  },
  {
    id: 13,
    name: 'Tinian International Airport',
    opening_time: '5/8/2023',
    closing_time: '9/24/2023',
    station: 'Lamerd Airport',
    min_order: 10,
    item_no: '9179818927',
    status: false,
    join_date: '8/2/2023',
    action: true,
  },
  {
    id: 14,
    name: 'Kramfors Sollefteå Airport',
    opening_time: '5/1/2023',
    closing_time: '9/25/2023',
    station: 'Tupai Airport',
    min_order: 52,
    item_no: '2114897974',
    status: false,
    join_date: '1/7/2024',
    action: false,
  },
  {
    id: 15,
    name: 'Zoersel (Oostmalle) Airfield',
    opening_time: '1/22/2024',
    closing_time: '12/24/2023',
    station: 'Sleetmute Airport',
    min_order: 83,
    item_no: '0311846718',
    status: true,
    join_date: '12/20/2023',
    action: true,
  },
  {
    id: 16,
    name: 'Nankina Airport',
    opening_time: '12/11/2023',
    closing_time: '12/12/2023',
    station: 'Rurutu Airport',
    min_order: 82,
    item_no: '9497100949',
    status: true,
    join_date: '3/16/2023',
    action: true,
  },
  {
    id: 17,
    name: 'Budapest Liszt Ferenc International Airport',
    opening_time: '8/6/2023',
    closing_time: '3/7/2023',
    station: 'Ewer Airport',
    min_order: 28,
    item_no: '5337377736',
    status: true,
    join_date: '7/1/2023',
    action: false,
  },
  {
    id: 18,
    name: 'Calverton Executive Airpark',
    opening_time: '9/16/2023',
    closing_time: '4/3/2023',
    station: 'London City Airport',
    min_order: 97,
    item_no: '9938642098',
    status: false,
    join_date: '3/21/2023',
    action: false,
  },
  {
    id: 19,
    name: 'Dabo Airport',
    opening_time: '12/10/2023',
    closing_time: '7/1/2023',
    station: 'Orlando Executive Airport',
    min_order: 98,
    item_no: '2270795180',
    status: true,
    join_date: '3/2/2023',
    action: false,
  },
];

const tableColumns = [
  { field: 'id', width: 50 },
  { field: 'name' },
  { field: 'opening_time' },
  { field: 'closing_time' },
  { field: 'station' },
  { field: 'min_order', width: 90 },
  { field: 'item_no' },
  { field: 'status', width: 80 },
  { field: 'join_date' },
  { field: 'action' },
];

function GridTable() {
  return (
    <div className='relative overflow-x-auto'>
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
