import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" className="bg-gradient-to-r from-gray-700 to-gray-200">
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
                <div className=" p-5 rounded-xl">
                    <img className="w-[500px] p-10 " src={user.photoURL} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center lg:w-[500px] mx-auto text-center gap-10">
                    <h2 className="text-3xl ">Name: {user.displayName}</h2>
                    <p className="text-xl pb-10 lg:pb-0">Email: {user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;