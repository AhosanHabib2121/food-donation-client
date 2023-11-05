import { createBrowserRouter} from "react-router-dom";
import Root from "../mainLayout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            index:true,
            element:<Home/>
        },
        {
            path: 'login',
            element: <Login/>
        },
        {
            path: 'register',
            element: <Register/>
        }
    ]
  },
]);

export default myCreateRouter;

