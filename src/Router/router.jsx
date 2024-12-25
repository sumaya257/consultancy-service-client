import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Blog from "../pages/Blog";
import AddService from "../pages/AddService";
import ManageService from "../pages/ManageService";
import AllServices from "../components/AllServices";
import ServiceDetails from "../pages/ServiceDetails";
import BookNow from "../pages/BookNow";
import ServiceToDo from "../pages/ServiceToDo";
import BookedService from "../pages/BookedService";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/add-service',
        element: <AddService></AddService>
      },
      {
        path: '/manage-service',
        element: <ManageService></ManageService>
      },
      {
        path: '/all-services',
        element: <AllServices></AllServices>,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: '/services/:id',
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/services'),
      },
      {
        path: '/book-now/:id',
        element: <BookNow></BookNow>
      },
      {
        path: '/booked-services',
        element: <BookedService></BookedService>
      },
      {
        path: '/service-todo',
        element: <ServiceToDo></ServiceToDo>
      },

    ]
  },
]);

export default router