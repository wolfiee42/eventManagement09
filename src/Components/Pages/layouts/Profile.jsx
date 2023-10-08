import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="max-w-7xl mx-auto m-5 flex">
            <div>
                <img className="w-[500px] " src={user.photoURL} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center w-[500px] mx-auto text-center">
                <h2 className="text-3xl ">Name: {user.displayName}</h2>
                <p className="text-xl">Email: {user.email}</p>
            </div>
        </div>
    );
};

export default Profile;