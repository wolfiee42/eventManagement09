import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="min-w-[60px] min-h-[60px] mx-auto loading loading-spinner loading-lg flex items-center"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.object
}
export default PrivateRoute;