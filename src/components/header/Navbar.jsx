import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import logo from '../../assets/foodLogo.png'
import PropTypes from "prop-types"; 
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user, loginOut} = useContext(AuthContext);

  // login out
  const handleLogout = () => {
    loginOut().then(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "logout completed",
      });
    });
  };

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
      <div className=" bg-[#111822] px-6 lg:px-0  ">
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
                className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-[#030610e3] rounded-box w-52"
              >
                {navLink}
              </ul>
            </div>
            <div className=" flex  md:gap-2 items-center">
              <img
                src={logo}
                alt="not found"
                className=" w-16 md:w-20 h-auto"
              />
              <Link
                to="/"
                className=" uppercase text-lg md:text-1xl font-semibold tracking-wider font-robotFont text-[#fff]"
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
            {/* mobile device */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost px-0 md:hidden">
                {user ? (
                  <img
                    src={user?.photoURL}
                    className=" w-12 h-12 rounded-full "
                    alt="not found"
                  />
                ) : (
                  <Link
                    to="/login"
                    className=" bg-[#112A46] text-[#fff] px-5 py-2 rounded-lg font-medium hover:bg-[#112A46]"
                  >
                    Login
                  </Link>
                )}
              </label>
              {user ? (
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
                      className=" bg-[#112A46] text-[#fff] px-5 py-2 rounded-lg font-medium hover:bg-[#112A46]"
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
            {/* medium and large device */}
            <div className="navbar-right hidden md:flex ">
              {user ? (
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
                    className=" bg-[#112A46] px-3 py-3 rounded-lg font-medium "
                  >
                    Sign Out
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className=" bg-[#112A46] text-[#fff] px-5 py-2 rounded-lg font-medium hover:bg-[#112A46]"
                >
                  Login
                </Link>
              )}
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

