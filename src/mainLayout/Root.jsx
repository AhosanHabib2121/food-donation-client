import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";

const Root = () => {

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