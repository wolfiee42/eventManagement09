import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.confiq";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setloading] = useState(true)

    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setloading(true);
        return signOut(auth)
            .then(() => {
                console.log('signout successfully');
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setloading(false);
            console.log('spying: ', currentUser);
        })
        return () => {
            unsubscibe()
        }
    })
    const authinfo = { user, createUser, loginUser, logOut, loading }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.object
}
export default AuthProvider;