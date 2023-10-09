import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Login = () => {
    const { loginUser, signinwithGoogle } = useContext(AuthContext);

    const handleLoginForm = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful!', {
                    position: "bottom-center"
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const hangleGoogle = () => {
        signinwithGoogle()
            .then(() => {
                toast.success('Login Successful!')
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[500px] max-w-lg shadow-2xl bg-gradient-to-r from-gray-200 to-gray-500">
                    <form onSubmit={handleLoginForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="text-base font-medium link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="px-4 py-3 rounded-lg bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black hover:cursor-pointer">LOGIN</button>
                        </div>
                        <p>Do not have an account? Please <Link to={'/registration'} className="text-blue-700 font-bold underline">Register</Link></p>
                    </form>
                    <div className="divider px-10">OR</div>
                    <div className=" mb-5 mt-10 flex justify-center items-center">
                        <button onClick={hangleGoogle} className="btn min-w-[445px] px-4 py-2 rounded-lg bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black hover:cursor-pointer"><FcGoogle className="text-xl"></FcGoogle>Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;