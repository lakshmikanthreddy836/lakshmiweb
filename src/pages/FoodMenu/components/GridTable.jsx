import * as React from 'react';
// import { FaDownload, FaEye, FaInfo, FaPen, FaPenAlt } from 'react-icons/fa';
// import { TbToolsKitchen3 } from 'react-icons/tb';
import DataTable from '../../../common-components/DataTable';
import SelectOption from '../../../common-components/SelectOption';
const selectOption = [
  { id: 0, label: "Select Type", value: "" }, { id: 1, label: "Income", value: "Income" }, { id: 2, label: "Expense", value: "Expense" }, { id: 3, label: "Investment", value: "Investment" },
];

const tableData = [
  {
    '#': 1,
    'Images': 'Dabo Airport',
    'Food Name': '12/10/2023',
    'Food Description': '7/1/2023',
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
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
    // 'Category': 'Orlando Executive Airport',
    // 'Food Type': 98,
    'Update': '2270795180',
    'Time': true,
    'Status': '3/2/2023',
    'Action': false,
  },
];

function GridTable() {
  const [value, setValue] = React.useState('');
     const handleChange = (event) => {
          setValue(event.target.value);
     };
  return (
    <div className='relative overflow-x-auto w-90'>
      {/* <DataTable colDefs={tableColumns} rowData={tableData} /> */}
      <div className="example-header text-black flex justify-end items-center p-2">
        <span>Search :</span>
        <input
          type="text"
          id="filter-text-box"
          placeholder="Filter..."
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1.5"
          // onInput={onFilterTextBoxChanged}
        />
      </div>
      <div className='table w-full border border-[#dee2e6] text-align-centre'>
        <div className='table-header-group'>
          <div className='table-row'>
            <div className='table-cell border-2 border-[#dee2e6]'>
              <p>#</p>
            </div>
            <div className='table-cell border-2 border-[#dee2e6]'>
              <p>Images</p>
            </div>
            <div className='table-cell border-2 border-[#dee2e6]'>
              <p>Food Name</p>
            </div>
            <div className='table-cell border-2 border-[#dee2e6]'>
              <p>Food Description</p>
            </div>
            <div className='table-cell border-2 border-[#dee2e6]'>
              <p>Category</p>
            </div>
            <div className='table-cell border-2 border-[#dee2e6]'>
              <p>Food Type</p>
            </div>
            <div className='table-cell border-2 border-[#dee2e6]'>
              <p>Update</p>
            </div>
            <div className='table-cell border-2 border-[#dee2e6]'>
              <p>Time</p>
            </div>
            <div className='table-cell border-2 border-[#dee2e6]'>
              <p>Status</p>
            </div>
            <div className='table-cell border-2 border-[#dee2e6]'>
              <p>Action</p>
            </div>
          </div>
        </div>
          {tableData?.map((items, index) => {
            console.log(items);
            return (
              <div className='table-row' key={index}>
                <div className='table-cell border-2 border-[#dee2e6] w-10 text-center h-3'>
                  <p>{items['#']}</p>
                </div>
                <div className='table-cell border-2 border-[#dee2e6] w-10 text-center h-3'>
                  <p>{items.Images}</p>
                </div>
                <div className='table-cell border-2 border-[#dee2e6] w-10 text-center h-3'>
                  <p>{items['Food Name']}</p>
                </div>
                <div className='table-cell border-2 border-[#dee2e6] w-10 text-center h-3'>
                  <p>{items['Food Description']}</p>
                </div>
                <div className='table-cell border-2 border-[#dee2e6] w-10 text-center h-3'>
                  {/* <p>{items.Category}</p> */}
                  <SelectOption
                  label={'Select'}
                  options={selectOption}
                  value={value}
                  onChange={handleChange}
                  />
                </div>
                <div className='table-cell border-2 border-[#dee2e6] w-10 text-center h-3'>
                  {/* <p>{items['Food Type']}</p> */}
                  <SelectOption
                  label={'Select'}
                  options={selectOption}
                  value={value}
                  onChange={handleChange}
                  />
                </div>
                <div className='table-cell border-2 border-[#dee2e6] w-10 text-center h-3'>
                  <p>{items.Update}</p>
                </div>
                <div className='table-cell border-2 border-[#dee2e6] w-10 text-center h-3'>
                  <p>{items.Time}</p>
                </div>
                <div className='table-cell border-2 border-[#dee2e6] w-10 text-center h-3'>
                  <p>{items.Status}</p>
                </div>
                <div className='table-cell border-2 border-[#dee2e6] w-10 text-center h-3'>
                  <p>{items.Action}</p>
                </div>
              </div>             
            );
          })}
      </div>
    </div>
  );
}

export default GridTable;
