import { IoInformationCircle } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types";

const data = [
  {
    id: 1,
    name: "Heritage Restaurant",
    station: "Naugachia",
    username: "hotelraajshri853204@gmail.com",
    password: "",
    orderNos: 0,
    status: "Active",
    action: "",
  },
  {
    id: 2,
    name: "DELHI DARBAR",
    station: "Pt. Deen Dayal Upadhyaya Junction",
    username: "robinjaiswal8@gmail.com",
    password: "",
    orderNos: 5,
    status: "Active",
    action: "",
  },
  {
    id: 3,
    name: "Royal Inn",
    station: "Partapgarh Junction",
    username: "ronit.shadwani.44@gmail.com",
    password: "",
    orderNos: 0,
    status: "Active",
    action: "",
  },
  {
    id: 4,
    name: "Zayka Restaurant",
    station: "Merta Road Junction",
    username: "jahaishrat97@gmail.com",
    password: "",
    orderNos: 0,
    status: "Active",
    action: "",
  },
  {
    id: 5,
    name: "Aaradhna Restaurant",
    station: "Ujjain Junction",
    username: "niranjankinshuk@gmail.com",
    password: "",
    orderNos: 0,
    status: "Active",
    action: "",
  },
  {
    id: 6,
    name: "Hotel Gurukrupa Sweets",
    station: "Burhanpur",
    username: "neerajmatwani.nm@gmail.com",
    password: "",
    orderNos: 0,
    status: "Active",
    action: "",
  },
  {
    id: 7,
    name: "STAR KITCHEN",
    station: "Renigunta Junction",
    username: "starkitchen02@gmail.com",
    password: "",
    orderNos: 0,
    status: "Active",
    action: "",
  },
  {
    id: 8,
    name: "GARDEN TOP RESTURANT",
    station: "Samastipur Junction",
    username: "harshanand9508@gmail.com",
    password: "",
    orderNos: 0,
    status: "Active",
    action: "",
  },
  {
    id: 9,
    name: "GARDEN TOP RESTURANT",
    station: "Samastipur Junction",
    username: "harshanand9508@gmail.com",
    password: "",
    orderNos: 0,
    status: "Temporary Close",
    action: "",
  },
  {
    id: 10,
    name: "Maa Harsiddhi Darbar Food",
    station: "Ujjain Junction",
    username: "maaharsiddhidarbar@gmail.com",
    password: "",
    orderNos: 1,
    status: "Active",
    action: "",
  },
  {
    id: 11,
    name: "Chakhna",
    station: "Mathura Junction",
    username: "chakhnamtr@gmail.com",
    password: "",
    orderNos: 0,
    status: "Active",
    action: "",
  },
  {
    id: 12,
    name: "Mahek Kitchen Fast Food",
    station: "Kanpur Central",
    username: "Ramjivan6306348956@gmail.com",
    password: "",
    orderNos: 12,
    status: "Temporary Close",
    action: "",
  },
  {
    id: 13,
    name: "Hotel Mannat",
    station: "Bhusaval Junction",
    username: "sameershaikh.ss13477@gmail.com",
    password: "",
    orderNos: 5,
    status: "Active",
    action: "",
  },
  {
    id: 14,
    name: "Parnami Food",
    station: "Roorkee",
    username: "honeymoney351@gmail.com",
    password: "",
    orderNos: 0,
    status: "Active",
    action: "",
  },
  {
    id: 15,
    name: "Maa Annapurna Thali and Restaurant",
    station: "Raigarh",
    username: "aharsh041@gmail.com",
    password: "",
    orderNos: 0,
    status: "Active",
    action: "",
  },
  {
    id: 16,
    name: "Aswad Hotel",
    station: "Panvel Junction",
    username: "hdzems23@gmail.com",
    password: "",
    orderNos: 0,
    status: "Active",
    action: "",
  },
  {
    id: 17,
    name: "NSM Restaurant",
    station: "Vijayawada Junction",
    username: "murali52327@gmail.com",
    password: "",
    orderNos: 1,
    status: "Temporary Close",
    action: "",
  },
  {
    id: 18,
    name: "Taj Hotel",
    station: "Bhusaval Junction",
    username: "aafaque.shaikh92@gmail.com",
    password: "",
    orderNos: 1,
    status: "Inactive",
    action: "",
  },
  {
    id: 19,
    name: "Shetty's Parcel Kitchen",
    station: "Kalyan Junction",
    username: "babashetty22.bs@gmail.com",
    password: "",
    orderNos: 0,
    status: "Active",
    action: "",
  },
  {
    id: 20,
    name: "Delhi Darbar",
    station: "Varanasi Junction",
    username: "robinjaiswal8@gmail.com",
    password: "",
    orderNos: 2,
    status: "Active",
    action: "",
  },
  {
    id: 21,
    name: "Nitai Gour Bhojnalaya",
    station: "New Jalpaiguri Junction",
    username: "tuntukumar722@gmail.com",
    password: "",
    orderNos: 0,
    status: "Active",
    action: "",
  },
  {
    id: 22,
    name: "Romys Dine",
    station: "Kota Junction",
    username: "e-catering@rallentino.com",
    password: "",
    orderNos: 3,
    status: "Active",
    action: "",
  },
  {
    id: 23,
    name: "Rasoi Restuarant",
    station: "Gondia Junction",
    username: "kushalkodwani94@gmail.com",
    password: "",
    orderNos: 1,
    status: "Active",
    action: "",
  },
  {
    id: 24,
    name: "Nakshatra Food and Beverage",
    station: "Abu Road",
    username: "sanjaysinghal265@gmail.com",
    password: "",
    orderNos: 7,
    status: "Active",
    action: "",
  },
  {
    id: 25,
    name: "Manokamna Foods",
    station: "Pt. Deen Dayal Upadhyaya Junction",
    username: "sanjaysingh.mgs@gmail.com",
    password: "",
    orderNos: 1,
    status: "Temporary Close",
    action: "",
  },
];
const IconWithPopup = ({ icon, popupMessage }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(popupMessage);

  return (
    <div className="relative ">
      {isHovered &&
        popupMessage && ( // Check if popupMessage is defined
          <div className=" bg-white border border-gray-200 p-1 w-full text-sm  shadow-md rounded-lg top-[-10px] right-[10px] ">
            {popupMessage}
          </div>
        )}
      {icon === "IoInformationCircle" && (
        <IoInformationCircle
          className="mx-2 text-2xl text-blue-300 cursor-pointer hover:text-red-400"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      )}
      {icon === "FaEye" && (
        <FaEye
          className="mx-2 text-2xl text-blue-300 cursor-pointer hover:text-red-400"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      )}
    </div>
  );
};

IconWithPopup.propTypes = {
  icon: PropTypes.oneOf(["IoInformationCircle", "FaEye"]).isRequired,
  popupMessage: PropTypes.string, // Make popupMessage prop optional
};

const VendorTable = () => {
  const popupMessages = ["Change Vendor Status", "View Orders"];
  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <div className="flex flex-row justify-between items-center px-5">
          <div className="flex items-center gap-2 text-black">
            <p>Show</p>
            <div>
              <select
                id="entries"
                name="entries"
                className="mt-1 ml-2 px-1 h-8 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none rounded-md text-[15px]"
              >
                <option value="10">10</option>
                <option value="25" selected>
                  25
                </option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <p>entries</p>
          </div>
          <div className="flex items-center">
            <p className="text-[15px] text-black">Search: </p>
            <input
              type="text"
              className="bg-white text-black pl-2 border-[1px] border-[#aaa] ml-1 h-8 focus:outline-none"
            />
          </div>
        </div>
        <div className="overflow-x-auto w-full h-fit mt-4 px-4">
          <div className="flex flex-col w-full h-fit ">
            <div className="flex px-2 w-full justify-between border-b-[1px] border-[#aaa] h-auto">
              <div className="flex flex-row">
                <div className="w-[50px] flex items-center h-9">
                  <p className="font-bold text-[15px] text-black p-2">#</p>
                </div>
                <div className="w-[200px] flex items-center h-auto">
                  <p className="font-bold text-[15px] text-black p-2">Name</p>
                </div>
                <div className="w-[200px] flex items-center h-auto">
                  <p className="font-bold text-[15px] text-black p-2">
                    Station
                  </p>
                </div>
                <div className="w-[300px] flex items-center h-auto">
                  <p className="font-bold text-[15px] text-black p-2">
                    Username
                  </p>
                </div>
                <div className="w-[200px] flex items-center h-auto">
                  <p className="font-bold text-[15px] text-black p-2">
                    Password
                  </p>
                </div>
                <div className="w-[200px] flex items-center h-auto">
                  <p className="font-bold text-[15px] text-black p-2">
                    Order Nos.
                  </p>
                </div>
                <div className="w-[200px] flex items-center h-auto">
                  <p className="font-bold text-[15px] text-black p-2">Status</p>
                </div>
                <div className="w-[200px] flex items-center h-auto">
                  <p className="font-bold text-[15px] text-black p-2">Action</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              {data.map((item, index) => (
                <div
                  className={`flex px-2 w-full justify-between h-auto items-center border-b-[1px] border-[#aaa] ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-100`}
                  key={index}
                >
                  <div className="flex flex-row">
                    <div className="w-[50px] flex items-center h-auto">
                      <p className="text-[15px] text-black p-2">{item.id}</p>
                    </div>
                    <div className="w-[200px] flex items-center h-auto">
                      <p className="text-[15px] text-black p-2">{item.name}</p>
                    </div>
                    <div className="w-[200px] flex items-center h-auto">
                      <p className="text-[15px] text-black p-2">
                        {item.station}
                      </p>
                    </div>
                    <div className="w-[300px] flex items-center h-auto">
                      <p className="text-[15px] text-black p-2">
                        {item.username}
                      </p>
                    </div>
                    <div className="w-[200px] flex items-center h-auto">
                      <p className="text-[15px] text-black p-2">
                        {item.password}
                      </p>
                    </div>
                    <div className="w-[200px] flex items-center h-auto">
                      <p className="text-[15px] text-black p-2">
                        {item.orderNos}
                      </p>
                    </div>
                    <div className="w-[200px] flex items-center h-auto">
                      <p className="text-[15px] text-black p-2">
                        {item.status}
                      </p>
                    </div>
                    <div className="w-[200px] flex items-center h-auto">
                      <IconWithPopup
                        icon="IoInformationCircle"
                        popupMessage={popupMessages[0]}
                      />
                      <IconWithPopup
                        icon="FaEye"
                        popupMessage={popupMessages[1]}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorTable;
