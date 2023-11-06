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
        element: <FoodDetails />,
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
        element: <MyFoodRequest />,
      },
    ],
  },
]);

export default myCreateRouter;

