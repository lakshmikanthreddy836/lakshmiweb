import { Link, useNavigate } from "react-router-dom";

const NavBar_Grid = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  }

  return (
    // <div className="bg-[#ffd4ce] text-sm text-gray-500 leading-none border-2 border-gray-200  inline-flex">
    //   <div className=" text-white h-12 w-full">Nav bar</div>

    // </div>

    <header className="lg:px-8 px-2 bg-[#ffd4ce] flex flex-wrap items-center  shadow-md">
      <div className="flex-1 flex justify-between items-center">
        <a href="javascript:void(0);" className="text-[14px]" onClick={() => { goback() }}>
          back
        </a>
      </div>

      <label className="pointer-cursor md:hidden block">
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden md:flex md:items-center md:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base   pt-4 md:pt-0">
            <Link to="/add-new-order" >
              <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-plus  text-[#70a9fa] hover:text-[#ff0018]"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                <a className=" text-[14px] py-3 px-0 block text-[#70a9fa] hover:text-[#ff0018]">
                  Add New Order
                </a>
              </li>
            </Link>
            <Link to={"/add-train"}>
              <li className="inline-flex items-center ml-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-plus  text-[#70a9fa] hover:text-[#ff0018]"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                <a className=" py-3 text-[14px] px-0 block text-[#70a9fa] hover:text-[#ff0018]">
                  Add Train
                </a>
              </li>
            </Link>
            <Link to={"/add-station"}>
              <li className="inline-flex items-center ml-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-plus  text-[#70a9fa] hover:text-[#ff0018]"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                <a className=" py-3 text-[14px] px-0 block text-[#70a9fa] hover:text-[#ff0018]">
                  Add Station
                </a>
              </li>
            </Link>
            <Link to={"/add-restaurant"}>
              <li className="inline-flex items-center ml-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-plus  text-[#70a9fa] hover:text-[#ff0018]"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                <a className=" py-3 text-[14px] px-0 block md:mb-0 mb-2 text-[#70a9fa] hover:text-[#ff0018]">
                  Add Restaurant
                </a>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar_Grid;
