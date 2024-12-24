import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Blog from "../pages/Blog";
import AddService from "../pages/AddService";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
       },
       {
        path:'/add-service',
        element:<AddService></AddService>
      },


      ]
    },
  ]);

  export default router