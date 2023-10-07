import { Outlet } from "react-router-dom";
import Navbar from "./sharedLayouts/Navbar";
import { Toaster } from "react-hot-toast";

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default Roots;