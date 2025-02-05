import * as React from 'react';
import Datatable_Order from "./datatable_order";
import Button from "../../../common-components/Button";
import SelectOption from "../../../common-components/SelectOption";
import { FaSearch, FaTimes } from "react-icons/fa";
import AdvanceSearch from './AdvanceSearch';

const Filter_Grid_Table_Order = () => {

  const SelectStation = [
    { id: 1, label: 'Freemium', value: 'Freemium' },

    { id: 2, label: 'Free', value: 'Free' },

    { id: 3, label: 'Paid', value: 'Paid' },
  ];

  const SelectOrder = [
    { id: 1, label: 'Freemium', value: 'Freemium' },

    { id: 2, label: 'Free', value: 'Free' },

    { id: 3, label: 'Paid', value: 'Paid' },
  ];
  const SelectTime = [
    { id: 1, label: 'Freemium', value: 'Freemium' },

    { id: 2, label: 'Free', value: 'Free' },

    { id: 3, label: 'Paid', value: 'Paid' },
  ];

  const [valueStation, setValueStation] = React.useState('');
  const [valueOrder, setValueOrder] = React.useState('');
  const [valueTime, setValueTime] = React.useState('');

  const handleChangeStation = (event) => {
    setValueStation(event.target.value);
  };

  const handleChangeOrder = (event) => {
    setValueOrder(event.target.value);
  };

  const handleChangeTime = (event) => {
    setValueTime(event.target.value);
  }; 

  return (
    <div>
      <div className="flex items-center mt-1 ml-10 mr-10">
        <div className="border-t-1 border-b-2 h-2 border-[#0000ff] flex-grow"></div>
      </div>
      <div className="mt-2 ml-10">
        <h2 className="text-2xl font-bold mb-4 float-left">ORDER LIST</h2>
        <Button label={'Export Total Report'} style="bg-gradient-to-r from-[#926afe] from-10% to-[#bd9aff] to-90% text-white px-1 py-1 ml-20 mr-20"/>
        <Button label={'Export Report'} style="bg-gradient-to-r from-[#ff0018] from-10% to-[#bc2634] to-90% text-white px-1 py-1"/>
        <AdvanceSearch/>
      </div>
      <form className="flex flex-col md:flex-row gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
        <div className="">
          <input
            type="text"
            placeholder="id"
            className="w-full mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Partner Order"
            className="w-full mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Train No"
            className="w-full mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Mobile"
            className="w-full mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2"
          />
        </div>
        <SelectOption
          label={"Select Station"}
          options={SelectStation}
          value={valueStation}
          onChange={handleChangeStation}
          style="w-60 mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
        />
        <SelectOption
          label={"Select Order Status"}
          options={SelectOrder}
          value={valueOrder}
          onChange={handleChangeOrder}
          style="w-60 mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
        />
        <SelectOption
          label={"Time Within"}
          options={SelectTime}
          value={valueTime}
          onChange={handleChangeTime}
          style="w-60 mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
        >
        </SelectOption>
        {/* <Button><FaSearch className="text-green"/></Button> */}
        <div className='w-40'>
          <button type="button" className="rounded-none text-white px-2 py-2 bg-[#34334a] hover:bg-[#34334a]/100 focus:ring-2 focus:outline-none focus:ring-[#34334a]/60 font-medium text-center inline-flex items-center dark:focus:ring-[#34334a]/60"><FaSearch size='1.2rem' /></button>
          <button type="button" className="text-white rounded-none px-2 py-2 bg-[#f9423c] hover:bg-[#f9423c]/100 focus:ring-2 focus:outline-none focus:ring-[#f9423c]/60 font-medium text-center inline-flex items-center dark:focus:ring-[#f9423c]/60"><FaTimes size='1.2rem' /></button>
        </div>
      </form>

      <div className="">
        <Datatable_Order />
      </div>     
    </div>
  );
};

export default Filter_Grid_Table_Order;
