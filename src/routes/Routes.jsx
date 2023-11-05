import { createBrowserRouter} from "react-router-dom";
import Root from "../mainLayout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddFood from "../pages/addFood/AddFood";
import AvailableFoods from "../pages/availableFoods/availableFoods";
import ManageMyFoods from "../pages/manageMyFoods/manageMyFoods";
import MyFoodRequest from "../pages/myFoodRequest/myFoodRequest";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "availableFoods",
        element: <AvailableFoods />,
      },
      {
        path: "addFood",
        element: <AddFood />,
      },
      {
        path: "manageMyFoods",
        element: <ManageMyFoods />,
      },
      {
        path: "myFoodRequest",
        element: <MyFoodRequest/>
      },
    ],
  },
]);

export default myCreateRouter;

