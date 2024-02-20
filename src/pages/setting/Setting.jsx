import { FaPlus } from "react-icons/fa6";
import SettingTable from "./../setting/SettingTable"
const Setting = () => {
  return (
    <>
      <h1 className="font-semibold mx-8 my-4  text-3xl">Settings</h1>
      <section
        style={{ boxShadow: "0px 2px 8px 8px rgba(0,0,0,0.19)" }}
        className="p-4 m-8 "
      >
        <div className="px-4 py-2 flex items-center justify-between">
          <button className="px-5 py-2 rounded-md text-white  bg-red-600">
            Users
          </button>
          <button className="hover:text-red-600 bg-[#F0F0F0] text-blue-400 flex items-center justify-center px-5 py-2 rounded-md">
            <FaPlus />
            Add users
          </button>
        </div>
      </section>
      <SettingTable/>
    </>
  );
};

export default Setting;
