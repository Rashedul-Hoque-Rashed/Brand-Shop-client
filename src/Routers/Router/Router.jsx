import { createBrowserRouter } from "react-router-dom";
import Root from "../../Pages/Root/Root";
import Home from "../../Pages/Home/Home";
import Error from "../../Pages/Error/Error";
import AddProducts from "../../Pages/AddProducts/AddProducts";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/add_products",
          element: <AddProducts/>
        }
      ]
    },
  ]);