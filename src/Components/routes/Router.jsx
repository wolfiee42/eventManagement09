import {
    createBrowserRouter
} from "react-router-dom";
import Roots from "../Pages/Roots";
import Home from "../Pages/layouts/Home";
import Blog from "../Pages/layouts/Blog";
import Login from "../Pages/layouts/Login";
import Registration from "../Pages/layouts/Registration";
import ContactUs from "../Pages/layouts/ContactUs";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Roots />,
        children: [
            {
                path: "/",
                element: <Home></Home>
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
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },
        ]
    },
]);


export default Router;