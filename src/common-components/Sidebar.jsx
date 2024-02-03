import { useState } from "react";
import dashbordlogo from "../assets/Dasboardlogo.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "Chart_fill" },
    { title: "Dashboard", src: "Chat" },
    { title: "Orders", src: "User", gap: true },
    { title: "Today Orders ", src: "Calendar" },
    { title: "Group Orders", src: "Search" },
    { title: "Complaints", src: "Chart" },
    { title: "Restaurant ", src: "Folder", gap: true },
    { title: "Reporting", src: "Setting" },
    { title: "Tour Operator", src: "Setting" },
    { title: "Ticketing Agent", src: "Setting" },
    { title: "Food Menu", src: "Setting" },
    { title: "Add Train", src: "Setting" },
    { title: "Vendor App", src: "Setting" },
    { title: "Enquiry", src: "Setting" },
    { title: "Reviews", src: "Setting" },
    { title: "Settings", src: "Setting" },
    { title: "Logout", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#ffd4ce]  p-5   relative duration-300`}
      >
        <div className="bg-[#7c3f38]">
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3  w-7 border-dark-purple
             border-2 rounded-full  `}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center ">
            <img
              src={dashbordlogo}
              className={`cursor-pointer duration-500 ${open}`}
            />
          </div>
        </div>
        <ul className="pt-6 ">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer  hover:bg-[#ff2c2c] text-[#000000] text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-2" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};

export default Sidebar;
