import {
    createBrowserRouter,
    } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/ErrorPage/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SellProduct from "../Pages/Sell Product/SellProduct";
import PrivateRoute from "./PrivateRoute";
import UserCart from "../Pages/UserCart/UserCart";




   export const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          errorElement:<Error></Error>,
          children:[{
            path:'/',
            element: <Home></Home>
          },
          {
            path:'/login',
            element: <Login></Login>
          },{
            path: '/register',
            element: <Register></Register>
          },{
            path:'/sellProduct',
            element: <PrivateRoute><SellProduct></SellProduct></PrivateRoute> 
          },{
            path:'/myCart',
            element: <PrivateRoute><UserCart></UserCart> </PrivateRoute>
          }
        ]
        },
      ]);