import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import { useState } from "react";

const Root = () => {
    const [changeMode, setChangeMode] = useState(false);

    return (
      <div className=" font-robotFont" data-theme={changeMode ? "dark" : "light"}>
        {/* header section here */}
        <Navbar changeMode={changeMode} setChangeMode={setChangeMode} />

        {/* outlet here */}
        <Outlet />
      </div>
    );
};

export default Root;