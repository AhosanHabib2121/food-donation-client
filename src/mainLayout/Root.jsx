import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className=" font-robotFont">
            <Outlet/>
        </div>
    );
};

export default Root;