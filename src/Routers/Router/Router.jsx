import { createBrowserRouter } from "react-router-dom";
import Root from "../../Pages/Root/Root";
import Home from "../../Components/Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: "/",
            element: <Home/>
        }
      ]
    },
  ]);