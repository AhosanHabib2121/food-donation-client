import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import logo from '../../assets/foodLogo.png'
import PropTypes from "prop-types"; 

const Navbar = ({setChangeMode, changeMode}) => {
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({isActive, isPending}) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/availableFoods">Available Foods</NavLink>
      </li>
      <li>
        <NavLink to="/addFood">Add Food</NavLink>
      </li>
      <li>
        <NavLink to="/manageMyFoods">Manage My Foods</NavLink>
      </li>
      <li>
        <NavLink to="/myFoodRequest">My Food Request</NavLink>
      </li>
    </>
  );

    return (
      <div>
        <div className=" bg-[#71a824] px-6 lg:px-0  ">
          <div className="navbar px-0 text-white py-2  max-w-7xl md:mx-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost px-0 lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-[#71a824] rounded-box w-52"
                >
                  {navLink}
                </ul>
              </div>
              <div className=" flex  md:gap-2 items-center">
                <img
                  src={logo}
                  alt="not found"
                  className=" w-20 md:w-24 h-auto"
                />
                <Link
                  to="/"
                  className=" uppercase text-lg md:text-2xl font-semibold tracking-wider font-robotFont text-[#fff]"
                >
                  FoodDonation
                </Link>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu-horizontal gap-7 text-[#fff] font-poppins font-medium  px-1 flex">
                {navLink}
              </ul>
            </div>
            <div className="navbar-end ">
              <div className=" mr-3 md:mr-4">
                {/* project light and dark mode system here */}
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    onClick={() => setChangeMode(!changeMode)}
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-on fill-current w-7 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-off fill-current w-7 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>

              {/* mobile device */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost px-0 md:hidden">
                  {/* {user ? (
                  <img
                    src={user?.photoURL}
                    className=" w-12 h-12 rounded-full "
                    alt="not found"
                  />
                ) : (
                  <Link
                    to="/login"
                    className=" bg-[#82b440] px-5 py-2 rounded-lg font-medium hover:bg-[#538b0b]"
                  >
                    Login
                  </Link>
                )} */}

                  {/* testing */}
                  <Link
                    to="/login"
                    className=" bg-[#1f2b3b] text-[#fff] px-5 py-2 rounded-lg font-medium hover:bg-[#1f2b3b]"
                  >
                    Login
                  </Link>
                </label>
                {/* {user ? (
                <ul
                  tabIndex={0}
                  className="menu-sm dropdown-content mt-3 z-[1] py-3 shadow bg-[#030610e3] rounded-box w-40  "
                >
                  <li className=" text-center">
                    <div className=" md:flex items-center gap-2 mr-4">
                      <h4>{user?.displayName}</h4>
                    </div>
                    <Link
                      to="/login"
                      onClick={handleLogout}
                      className=" bg-[#82b440] px-2 py-1 rounded-lg font-medium hover:bg-[#538b0b]"
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              ) : (
                ""
              )} */}
              </div>
              {/* medium and large device */}
              <div className="navbar-right hidden md:flex ">
                {/* {user ? (
                <>
                  <div className="flex items-center gap-2 mr-4">
                    <h4>{user?.displayName}</h4>
                    <img
                      src={user?.photoURL}
                      className=" w-12 h-12 rounded-full "
                      alt="not found"
                    />
                  </div>
                  <Link
                    to="/login"
                    onClick={handleLogout}
                    className=" bg-[#82b440] px-3 py-3 rounded-lg font-medium "
                  >
                    Sign Out
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className=" bg-[#82b440] px-5 py-2  rounded-lg font-medium hover:bg-[#538b0b]"
                >
                  Login
                </Link>
              )} */}

                {/* testing */}
                <Link
                  to="/login"
                  className=" bg-[#1f2b3b] text-[#fff] px-5 py-2 rounded-lg font-medium hover:bg-[#1f2b3b]"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

Navbar.propTypes = {
  setChangeMode: PropTypes.func,
  changeMode: PropTypes.bool,
};
export default Navbar;

