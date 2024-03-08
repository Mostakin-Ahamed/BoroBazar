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
import MyCart from '../Pages/UserCart/MyCart';
import AllProducts from "../Pages/AllProducts/AllProducts"
import Detail from "../Pages/SingleDetail/Detail";




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
          },
          {
            path:`/myCart`,
            element: <PrivateRoute><MyCart></MyCart> </PrivateRoute>,
            loader: ()=>fetch('http://localhost:5000/cart')
          },
          {
            path:'/allProducts',
            element: <AllProducts></AllProducts>
          },
          {
            path: `/:id`,
            element: <PrivateRoute><Detail></Detail></PrivateRoute>,
            loader: ({params})=> fetch(`http://localhost:5000/${params.id}`)
        },
        ]
        },
      ]);