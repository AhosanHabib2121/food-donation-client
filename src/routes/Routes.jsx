import { createBrowserRouter} from "react-router-dom";
import Root from "../mainLayout/Root";
import Home from "../pages/home/Home";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            index:true,
            element:<Home/>
        }
    ]
  },
]);

export default myCreateRouter;

