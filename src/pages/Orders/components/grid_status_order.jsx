import { FaBars,FaCheck,FaRegCircleXmark} from "react-icons/fa6";
import { PiCurrencyInrBold } from "react-icons/pi";
import { CiWarning } from "react-icons/ci";
const Grid_Status_Order = () => {
     return (
       <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
         <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
           <div className="p-4 bg-black">
             <FaBars size='2.0rem'className="text-white"/>
           </div>
           <div className="px-4 text-gray-700">
             <h3 className="text-sm tracking-wider">Total</h3>
             <p className="text-3xl">0</p>
           </div>
         </div>
         <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
           <div className="p-4 bg-green-400">
             <FaCheck size='2.0rem'className="text-white"/>
           </div>
           <div className="px-4 text-gray-700">
             <h3 className="text-sm tracking-wider">Delivered</h3>
             <p className="text-3xl">0</p>
           </div>
         </div>
         <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
           <div className="p-4 bg-yellow-400">
             <CiWarning size='2.0rem'className="text-white"/>
           </div>
           <div className="px-4 text-gray-700">
             <h3 className="text-sm tracking-wider">Un-Delivered</h3>
             <p className="text-3xl">0</p>
           </div>
         </div>
         <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
           <div className="p-4 bg-red-400">
             <FaRegCircleXmark size='2.0rem'className="text-white"/>
           </div>
           <div className="px-4 text-gray-700">
             <h3 className="text-sm tracking-wider">Cancelled</h3>
             <p className="text-3xl">0</p>
           </div>
         </div>
         <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
           <div className="p-4 bg-gradient-to-r from-sky-500 via-30% to-[#23e7a8] to-70%">
             <PiCurrencyInrBold  size='2.0rem'className="text-white"/>
           </div>
           <div className="px-4 text-gray-700">
             <h3 className="text-sm tracking-wider">Total Sale</h3>
             <p className="text-3xl">0</p>
           </div>
         </div>
         <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
           <div className="p-4 bg-gradient-to-r from-sky-500 via-30% to-[#23e7a8] to-70%">
             <PiCurrencyInrBold  size='2.0rem'className="text-white"/>
           </div>
           <div className="px-4 text-gray-700">
             <h3 className="text-sm tracking-wider">Total Commision</h3>
             <p className="text-3xl">0</p>
           </div>
         </div>
       </div>
     );
   };
   
   export default Grid_Status_Order;
   