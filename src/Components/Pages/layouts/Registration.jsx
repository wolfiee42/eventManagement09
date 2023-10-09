import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {

    const { createUser, updateuser, signinwithGoogle } = useContext(AuthContext);


    const handleRegistrationForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            return toast.error('Password should be at least 6 characters.', {
                position: "bottom-center"
            })
        }

        if (/[A-Z]/.test(password)) {
            return toast.error('Password should not have a capital letter.', {
                position: "bottom-center"
            })
        }
        if (/[!@#$%^&*()_+{}=`'"|`[\]:;<>,.?~\\\-/]/.test(password)) {
            return toast.error('Password should not have a special character', {
                position: "bottom-center"
            })
        }
        createUser(email, password)
            .then((result) => {
                console.log(result);
                toast.success('Registration Successful!')
                updateuser(name, image)
                    .then(() => {
                        console.log('user created successfully');
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const hangleGoogle = () => {
        signinwithGoogle()
            .then(() => {
                toast.success('Registration Successful!')
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
                    <h1 className="text-xl lg:text-5xl font-bold">Registration now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[350px] lg:w-[500px]  max-w-lg shadow-2xl bg-gradient-to-r from-gray-200 to-gray-500">
                    <form onSubmit={handleRegistrationForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="lg:lg:text-xl font-semibold">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="lg:text-xl font-semibold">Image</span>
                            </label>
                            <input name="image" type="text" placeholder="Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="lg:text-xl font-semibold">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="lg:text-xl font-semibold">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="px-4 py-3 rounded-lg bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black hover:cursor-pointer">REGISTRATION</button>
                        </div>
                        <p className="text-xs lg:text-base">Already have an account? Please <Link to={'/login'} className="text-blue-700 font-bold underline">Login</Link></p>
                    </form>
                    <div className="divider px-10">OR</div>
                    <div className=" mb-5 mt-10 flex justify-center items-center">
                        <button onClick={hangleGoogle} className="btn w-[290px] lg:min-w-[445px] px-4 py-2 rounded-lg bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black hover:cursor-pointer"><FcGoogle className="text-xl"></FcGoogle>Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;