import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = (e) => {
        e.preventDefault()
        logOut()
        toast.success('Logged out successfully.', {
            position: "bottom-center"
        })
    }
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
        {
            user ? '' : <> <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/registration'}>Registration</NavLink></li></>
        }

        {
            user && <li><NavLink to={'/purchased'}>Purchased Services</NavLink></li>
        }
        {
            user && <li><NavLink to={'/profile'}>Profile</NavLink></li>
        }


    </>
    return (
        <div className="navbar bg-gray-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'}><img className="w-[140px] h-[80px]" src="https://i.ibb.co/L0GXprK/Screenshot-239-removebg-preview.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <p className="font-semibold">{user.displayName}</p>
                        <img className="w-12 h-12 mx-3 rounded-[50px]" src={user.photoURL} alt="" />
                        <Link onClick={handleSignOut} className="px-4 py-2 rounded-lg bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black hover:cursor-pointer">Sign Out</Link>
                    </> : <Link to={'/login'} className="px-4 py-2 rounded-lg bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black hover:cursor-pointer">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;