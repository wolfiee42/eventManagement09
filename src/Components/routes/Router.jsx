import {
    createBrowserRouter
} from "react-router-dom";
import Roots from "../Pages/Roots";
import Home from "../Pages/layouts/Home";
import Blog from "../Pages/layouts/Blog";
import Login from "../Pages/layouts/Login";
import Registration from "../Pages/layouts/Registration";
import ServiceDetails from "../Pages/layouts/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import PurchasedService from "../Pages/layouts/PurchasedService";
import Profile from "../Pages/layouts/Profile";
import Errorlayout from "../Pages/layouts/Errorlayout";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Roots />,
        errorElement: <Errorlayout />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/service.json")
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/service/:id",
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path: "/purchased",
                element: <PrivateRoute><PurchasedService></PurchasedService></PrivateRoute>,
                loader: () => fetch('/service.json')
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    },
]);


export default Router;