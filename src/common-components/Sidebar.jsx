import { useState } from "react";
import dashbordlogo from "../assets/Dasboardlogo.png";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "../assets/Icons/Home";
import DashboardIcon from "../assets/Icons/Dashboard";
import Order from "../assets/Icons/Order";
import Complaints from "../assets/Icons/Complaints";
import Resturants from "../assets/Icons/Resturants";
import Logout from "../assets/Icons/Logout";
import Settings from "../assets/Icons/Settings";
import Notes from "../assets/Icons/Notes";
import Search from "../assets/Icons/Search";
import People from "../assets/Icons/People";
import Train from "../assets/Icons/Train";
import Men from "../assets/Icons/Men";
import Reporting from "../assets/Icons/Reporting";
import { RiArrowDownSFill,RiArrowUpSFill  } from "react-icons/ri";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    //  hash,
     pathname, 
    //  search
     } = location;
  const pageName = pathname ? pathname.slice(1) : "";
  const Menus = [
    { title: "Home", src: "Chart_fill", path: "home", icon: <HomeIcon /> },
    {
      title: "Dashboard",
      src: "Chat",
      path: "dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "Orders",
      src: "User",
      path: "orders",
      gap: true,
      icon: <Order />,
    },
    {
      title: "Today Orders ",
      src: "Calendar",
      path: "today-orders",
      icon: <Order />,
    },
    {
      title: "Group Orders",
      src: "Search",
      path: "group-orders",
      icon: <Order />,
    },
    {
      title: "Complaints",
      src: "Chart",
      path: "complaints",
      icon: <Complaints />,
    },
    {
      title: "Restaurant ",
      src: "Folder",
      gap: true,
      path: "restaurant",
      icon: <Resturants />,
    },
    {
      title: "Reporting",
      src: "Setting",
      path: "reporting",
      icon: <Reporting />,
      iconClosed:<RiArrowDownSFill/>,
      iconOpened:<RiArrowUpSFill/>,
      subNav: [
        {
          title:'Employee',
          path:'reporting/employee',
          icon: <Reporting/>
        },
        {
          title:'Expense',
          path:'reporting/Expense',
          icon: <Reporting/>
        },
      ]
    },
    {
      title: "Tour Operator",
      src: "Setting",
      path: "tour-operator",
      icon: <Men />,
    },
    {
      title: "Ticketing Agent",
      src: "Setting",
      path: "ticketing-agent",
      icon: <People />,
    },
    { title: "Food Menu", src: "Setting", path: "food-menu", icon: <Notes /> },
    { title: "Add Train", src: "Setting", path: "add-train", icon: <Train /> },
    {
      title: "Vendor App",
      src: "Setting",
      path: "vendor-app",
      icon: <People />,
    },
    { title: "Enquiry", src: "Setting", path: "enquiry", icon: <Search /> },
    { title: "Reviews", src: "Setting", path: "reviews", icon: <Notes /> },
    { title: "Settings", src: "Setting", path: "settings", icon: <Settings /> },
    { title: "Logout", src: "Setting", path: "/", icon: <Logout /> },
  ];

  return (
    <div className="w-72 h-full flex flex-col gap-0 justify-start bg-[#ffd4ce] duration-300 overflow-hidden ">
      <div className="h-fit py-2 w-full flex justify-center items-center bg-[#ffb5ad]">
        <div className=" w-[60%] h-[30px] relative">
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-8  w-7  border-dark-purple
             border-2 rounded-full  `}
            onClick={() => setOpen(!open)}
          />
          <div className="flex items-center h-full w-full">
            <img
              src={dashbordlogo}
              className={`cursor-pointer duration-500 h-full w-full ${open}`}
            />
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-col">
        <div className="overflow-y-auto h-full w-full">
          {Menus?.map((items, index) => {
            return (
              <div
                className={`h-12 w-full flex items-center cursor-pointer gap-6 px-5 hover:bg-[#ff6859] text-[#000000] text-sm ${
                  pageName == items?.path ? "bg-[#ff6859]" : ""
                }`}
                key={index}
                onClick={() => {
                  navigate(`${items?.path}`);
                }}
              >
                <div className="h-fit w-[30px] flex items-center justify-center">
                  {/* <img src={`./src/assets/${items?.src}.png`}  className="h-full bg-black w-[350px]"/> */}
                  {items?.icon}
                </div>
                <div className="text-black h-fit duration-200 text-[15px] font-medium w-fit">
                  {items?.title}
                </div>
                <div>
                  {items.subNav && items.subNav ? items.iconClosed : items.subNav ? items.iconOpened : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    /* <div className="h-screen flex-1 ">
        <TodayOrders />
      </div> */
  );
};

export default Sidebar;
