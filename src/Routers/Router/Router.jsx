import { createBrowserRouter } from "react-router-dom";
import Root from "../../Pages/Root/Root";
import Home from "../../Pages/Home/Home";
import Error from "../../Pages/Error/Error";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import Products from "../../Pages/Products/Products";
import Details from "../../Pages/Details/Details";
import Cart from "../../Pages/Cart/Cart";
import Update from "../../Pages/Update/Update";
import SingUp from "../../Pages/SingUp/SingUp";
import Login from "../../Pages/Login/Login";
import PrivateRouter from "../PrivateRouter";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/add_products",
        element: <PrivateRouter><AddProducts /></PrivateRouter>
      },
      {
        path: "/products/:brand_name",
        element: <Products />,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand_name}`)
      },
      {
        path: "/details/:id",
        element: <PrivateRouter><Details /></PrivateRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path: "/cart",
        element: <PrivateRouter><Cart /></PrivateRouter>,
        loader: () => fetch("http://localhost:5000/cart")
      },
      {
        path: "/update/:id",
        element: <Update/>,
        loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/singUp",
        element: <SingUp/>
      }
    ]
  },
]);