import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Registration = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegistrationForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Registration now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[500px] max-w-lg shadow-2xl bg-gradient-to-r from-gray-200 to-gray-500">
                    <form onSubmit={handleRegistrationForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Image</span>
                            </label>
                            <input name="image" type="text" placeholder="Image URL" className="input input-bordered" required />
                        </div>
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
                                <a href="#" className="font-medium link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="px-4 py-3 rounded-lg bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black hover:cursor-pointer">REGISTRATION</button>
                        </div>
                        <p>Already have an account? Please <Link to={'/login'} className="text-blue-700 font-bold underline">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;