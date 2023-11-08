import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import { useEffect } from "react";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == '/') {
      document.title = `FoodD | Home`
    }
    else {
      document.title = `FoodD ${ location.pathname.replace('/','|')}`
    }
    if (location.state) {
        document.title = ` ${location.state}`;
    }


  },[location])

    return (
      <div
        className=" font-robotFont"
      >
        {/* header section here */}
        <Navbar />
        {/* outlet here */}
        <Outlet />
      </div>
    );
};

export default Root;