import { createBrowserRouter} from "react-router-dom";
import Root from "../mainLayout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddFood from "../pages/addFood/AddFood";
import AvailableFoods from "../pages/availableFoods/availableFoods";
import ManageMyFoods from "../pages/manageMyFoods/manageMyFoods";
import MyFoodRequest from "../pages/myFoodRequest/myFoodRequest";
import ErrorPage from "../pages/errorPage/ErrorPage";
import FoodDetails from "../pages/foodDetails/FoodDetails";
import PrivateRoutes from "./PrivateRoutes";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "food/:foodId",
        element: (
          <PrivateRoutes>
            <FoodDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "availableFoods/food/:foodId",
        element: (
          <PrivateRoutes>
            <FoodDetails />
          </PrivateRoutes>
        ),
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
        element: (
          <PrivateRoutes>
            <AddFood />
          </PrivateRoutes>
        ),
      },
      {
        path: "manageMyFoods",
        element: (
          <PrivateRoutes>
            <ManageMyFoods />
          </PrivateRoutes>
        ),
      },
      {
        path: "myFoodRequest",
        element: (
          <PrivateRoutes>
            <MyFoodRequest />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default myCreateRouter;

