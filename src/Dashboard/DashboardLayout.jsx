import { useState } from "react";
import { FaShoppingCart, FaVideo } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdCategory, MdDashboard } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import Skinme from "../asset/img.png";
// import { logout } from "../../features/userSlice";
// import { useDispatch } from "react-redux";

const DashboardLayout = ({ children, title }) => {
  const [open, setOpen] = useState(false);
  const currYear = new Date().getFullYear();

  return (
    <div className="flex">
      {/* sidebar */}
      <div
        id="dashboard"
        className="md:flex flex-col md:min-h-screen overflow-y-auto h-auto w-full fixed top-0 left-0 md:w-64 bg-white"
      >
        <div className="flex h-auto flex-col w-full text-gray-700 bg-white flex-shrink-0">
          {/* logo */}
          <div className="flex-shrink-0 px-8 py-2 pb-3 flex flex-row items-center justify-between">
            <Link
              to={"/dashboards"}
              className="flex items-center text-xl font-openSans font-semibold tracking-widest 
              text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              <img
                src={Skinme}
                alt="logo"
                className="w-[120px] h-[40px] mt-2 mr-8"
              />
            </Link>
            <button
              className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
              onClick={() => setOpen(!open)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  style={{ display: !open ? "block" : "none" }}
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path
                  style={{ display: open ? "block" : "none" }}
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* end logo  */}

          {/* sidebar menu  */}
          <nav
            className={`${
              open ? "block space-y-4" : "hidden"
            } flex-grow md:block px-4 overflow-auto pb-4 md:pb-0 md:overflow-y-auto`}
          >
            <div className="relative">
              <NavLink
                activeClassName="bg-pink-400 text-white"
                className="flex justify-between cursor-pointer w-full items-center px-4 py-2 mt-4 text-lg font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200  hover:bg-pink-500 focus:bg-pink-500 hover:text-white focus:outline-none focus:shadow-outline"
                to={"/dashboard"}
              >
                Dashboard
                {/* dashboard icons */}
                <MdDashboard />
              </NavLink>
            </div>
            <NavLink
            activeClassName="bg-pink-400 text-white"
              className="flex justify-between items-center px-4 py-2 mt-2 text-lg text-gray-900 font-semibold hover:text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-blue-600 dark-mode:focus:bg-blue-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-white focus:text-white hover:bg-pink-500 focus:bg-pink-500 focus:outline-none focus:shadow-outline"
              to={"/dashboard/users"}
            >
              User
              {/* user icon */}
              <FaCircleUser />
            </NavLink>
            {/* Product */}
            <NavLink
              className="flex justify-between items-center px-4 py-2 mt-2 text-lg text-gray-900 font-semibold hover:text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-blue-600 dark-mode:focus:bg-blue-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-white focus:text-white hover:bg-pink-500 focus:bg-pink-500 focus:outline-none focus:shadow-outline"
              to={"/dashboard/dashboardProduct/"}
            >
              Products
              <FaShoppingCart />
            </NavLink>
            {/* Categories */}
            <NavLink
              className="flex justify-between items-center px-4 py-2 mt-2 text-lg text-gray-900 font-semibold hover:text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-blue-600 dark-mode:focus:bg-blue-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-white focus:text-white hover:bg-pink-500 focus:bg-pink-500 focus:outline-none focus:shadow-outline"
              to={"/dashboard/dashboardCategory"}
            >
              Categories
              <MdCategory />
            </NavLink>
            {/* video  */}
            <NavLink
              className="flex justify-between items-center px-4 py-2 mt-2 text-lg text-gray-900 font-semibold hover:text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-blue-600 dark-mode:focus:bg-blue-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-white focus:text-white hover:bg-pink-500 focus:bg-pink-500 focus:outline-none focus:shadow-outline"
              to={"/dashboard/dashboardVideo"}
            >
              Videos
              <FaVideo />
            </NavLink>
            {/* contact menu  */}
            <NavLink
              className="flex justify-between items-center px-4 py-2 mt-2 text-lg text-gray-900 font-semibold hover:text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-blue-600 dark-mode:focus:bg-blue-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-white focus:text-white hover:bg-pink-500 focus:bg-pink-500 focus:outline-none focus:shadow-outline"
              to={"/dashboard/contacts"}
            >
              Contact
              <RiContactsBook2Fill />
            </NavLink>
            {/* back to home page menu  */}
            <NavLink
              className="flex justify-between items-center px-4 py-2 mt-2 text-lg font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 hover:text-white hover:bg-pink-500 focus:bg-pink-500  focus:outline-none focus:shadow-outline"
              to={"/"}
            >
              Back to Homepage
              <IoArrowBackCircle />
            </NavLink>
            {/* no show when small screen size  */}
            {/* sign out btn menu */}
            <NavLink
              to={"/login"}
              // onClick={handleLogout}
              className="flex justify-between items-center px-4 py-2 mt-2 text-lg font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 hover:text-white hover:bg-pink-500 focus:bg-pink-500  focus:outline-none focus:shadow-outline"
            >
              Sign out
              <PiSignOutBold />
            </NavLink>
          </nav>

          {/* sign out menu  */}
        </div>
      </div>

      {/* content  */}
      <div className="flex flex-col w-full ml-0 md:ml-64  ">
        {/* navbar header  */}
        <div className="w-full"></div>
        {/* dashboard body */}
        <div className="h-auto w-full bg-pink-100  ">
          {title && <h1 className="text-2xl">{title}</h1>}
          {children}
        </div>
        {/* <footer className="h-auto border w-full font-semibold text-sm flex items-center justify-center md:justify-end md:px-10">
          &#169; Copyright Skinme {currYear}
        </footer> */}
      </div>
    </div>
  );
};

export default DashboardLayout;
