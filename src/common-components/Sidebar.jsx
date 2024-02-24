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
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [openInnerMenu, setOpenInnerMenu] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { hash, pathname, search } = location;
  const pageName = pathname ? pathname.slice(1) : "";
  const Menus = [
    {
      title: "Home",
      src: "Chart_fill",
      path: "home",
      icon: <HomeIcon />,
      isInnerMenu: false,
    },
    {
      title: "Dashboard",
      src: "Chat",
      path: "dashboard",
      icon: <DashboardIcon />,
      isInnerMenu: false,
    },
    {
      title: "Orders",
      src: "User",
      path: "orders",
      gap: true,
      icon: <Order />,
      isInnerMenu: false,
    },
    {
      title: "Today Orders ",
      src: "Calendar",
      path: "today-orders",
      icon: <Order />,
      isInnerMenu: false,
    },
    {
      title: "Group Orders",
      src: "Search",
      path: "group-orders",
      icon: <Order />,
      isInnerMenu: false,
    },
    {
      title: "Complaints",
      src: "Chart",
      path: "complaints",
      icon: <Complaints />,
      isInnerMenu: false,
    },
    {
      title: "Restaurant ",
      src: "Folder",
      gap: true,
      path: "restaurant",
      icon: <Resturants />,
      isInnerMenu: false,
    },

    {
      title: "Reporting",
      src: "Setting",
      // path: "reporting",
      icon: <Reporting />,
      isInnerMenu: true,
      innerMenus: [
        {
          title: "Employee",
          src: "Chart_fill1",
          path: "employee",
        },
        {
          title: "Expense",
          src: "Chart_fill2",
          path: "expenses",
        },
        {
          title: "Salary Report",
          src: "Chart_fill2",
          path: "salary-report",
        },
      ],
    },
    {
      title: "Tour Operator",
      src: "Setting",
      path: "tour-operator",
      icon: <Men />,
      isInnerMenu: false,
    },
    {
      title: "Ticketing Agent",
      src: "Setting",
      path: "ticketing-agent",
      icon: <People />,
      isInnerMenu: false,
      
    },
    {
      title: "Food Menu",
      src: "Setting",
      path: "food-menu",
      icon: <Notes />,
      isInnerMenu: false,
    },
    {
      title: "Add Train",
      src: "Setting",
      path: "add-train",
      icon: <Train />,
      isInnerMenu: false,
    },
    {
      title: "Vendor App",
      src: "Setting",
      path: "vendor-app",
      icon: <People />,
      isInnerMenu: false,
    },
    {
      title: "Enquiry",
      src: "Setting",
      path: "enquiry",
      icon: <Search />,
      isInnerMenu: true,
      innerMenus: [
        {
          title: "Enquiry",
          src: "Chart_fill1",
          path: "enquiry",
        },
        {
          title: "Search Keyword",
          src: "Chart_fill2",
          path: "search-keyword",
        },
      ],
    },
    {
      title: "Reviews",
      src: "Setting",
      path: "reviews",
      icon: <Notes />,
      isInnerMenu: false,
    },
    {
      title: "Settings",
      src: "Setting",
      path: "settings",
      icon: <Settings />,
      isInnerMenu: true,
      innerMenus: [
        {
          title: "Settings",
          src: "Chart_fill1",
          path: "settings",
        },
        {
          title: "Home Content",
          src: "Chart_fill2",
          path: "home-content",
        },
        {
          title: "Category",
          src: "Chart_fill2",
          path: "category",
        },
      ],
    },
    {
      title: "Logout",
      src: "Setting",
      path: "/",
      icon: <Logout />,
      isInnerMenu: false,
    },
  ];

  return (
    <div className="w-[320px] h-full flex flex-col gap-0 justify-start bg-[#ffd4ce] duration-300 overflow-hidden ">
      <div className="h-fit py-2 w-full flex justify-center items-center bg-[#ffb5ad]">
        <div className=" w-[60%] h-[30px] relative">
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-8  w-7  border-dark-purple
             border-2 rounded-full  `}
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
                className={`w-full flex  cursor-pointer   text-[#000000] text-sm `}
                key={index}
              >
                {/* {!items?.isInnerMenu && (
                  <div className="h-fit w-[30px] flex items-center ml-5 justify-center">
                    {items?.icon}
                  </div>
                )} */}
                {items?.isInnerMenu == false && (
                  <div
                    className={`w-full h-fit flex flex-row py-[14px] hover:bg-[#ff6859] ${
                      pageName == items?.path ? "bg-[#ff6859]" : ""
                    }`}
                    onClick={() => {
                      navigate(`${items?.path}`);
                      if (items?.title == "Logout") {
                        localStorage.clear();
                      }
                    }}
                  >
                    <div className="h-fit w-[30px] flex items-center ml-5 justify-center">
                      {/* <img src={`./src/assets/${items?.src}.png`}  className="h-full bg-black w-[350px]"/> */}
                      {items?.icon}
                    </div>
                    <div className="text-black h-fit duration-200 ml-5 text-[14.5px] font-medium w-fit">
                      {items?.title}
                    </div>
                  </div>
                )}
                {items?.isInnerMenu && (
                  <div className="text-black h-fit  w-full duration-200 text-[14.5px] font-medium flex flex-col ">
                    <div
                      className="flex py-[14px] gap-6 hover:bg-[#ff6859]"
                      onClick={() => {
                        setOpenInnerMenu(index + 1);
                        setOpen(!open);
                      }}
                    >
                      <div className="h-fit w-[30px] flex items-center ml-6 justify-center">
                        {/* <img src={`./src/assets/${items?.src}.png`}  className="h-full bg-black w-[350px]"/> */}
                        {items?.icon}
                      </div>
                      <div className="flex justify-between  w-full relative mr-6">
                        {items?.title}
                        {
                          <button
                            className={` font-bold text-[12px] w-[20px] flex justify-center items-center ${
                              openInnerMenu == index + 1 && open
                                ? "rotate-90"
                                : "-rotate-90"
                            }`}
                          >
                            {">"}
                          </button>
                        }
                      </div>
                    </div>
                    {openInnerMenu == index + 1 && open && (
                      <span className="bg-[#ffb5ad] ml-10 w-full open-animation">
                        {items?.innerMenus?.map((data, i) => (
                          <div
                            className="text-black py-[14px] pl-8 hover:bg-[#ff6859]  h-fit w-full"
                            key={i}
                            onClick={()=>{
                              navigate(`${data?.path}`);
                            }}
                          >
                            {" "}
                            {data?.title}
                          </div>
                        ))}
                      </span>
                    )}
                  </div>
                )}
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
