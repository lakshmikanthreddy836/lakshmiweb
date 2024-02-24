import * as React from 'react';
// import { FaDownload, FaEye, FaInfo, FaPen, FaPenAlt } from 'react-icons/fa';
// import { TbToolsKitchen3 } from 'react-icons/tb';
// import DataTable from '../../../common-components/DataTable';
import { FaEdit, FaTrash } from "react-icons/fa";
import SelectOption from '../../../common-components/SelectOption';
import Button from '../../../common-components/Button';
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
      <div className='table w-full border-[#dee2e6] text-align-centre'>
        <div className='table-header-group'>
          <div className='table-row font-semibold text-sm text-[#060912] shadow-[3px_3px_3px_3px_rgba(93,109,118,0.24)]'>
            <div className='table-cell border border-[#dee2e6]'>
              <p>#</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Images</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Food Name</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Food Description</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Category</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Food Type</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Update</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Time</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Status</p>
            </div>
            <div className='table-cell border border-[#dee2e6]'>
              <p>Action</p>
            </div>
          </div>
        </div>
        {tableData?.map((items, index) => {
          console.log(items);
          return (
            <div className='table-row' key={index}>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items['#']}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items.Images}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items['Food Name']}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items['Food Description']}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                {/* <p>{items.Category}</p> */}
                <SelectOption
                  label={'Select'}
                  options={selectOption}
                  value={value}
                  onChange={handleChange}
                />
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                {/* <p>{items['Food Type']}</p> */}
                <SelectOption
                  label={'Select'}
                  options={selectOption}
                  value={value}
                  onChange={handleChange}
                  style="w-60 mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
                />
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items.Update}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items.Time}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <p>{items.Status}</p>
              </div>
              <div className='table-cell border border-[#dee2e6] w-10 text-center h-3'>
                <Button
                  label={<FaEdit />}
                  style='px-3 py-3 text-[#083650] text-xl mx-1'
                />
                <Button
                  label={<FaTrash />}
                  style='px-3 py-3 text-[#ff0018] text-xl'
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GridTable;
