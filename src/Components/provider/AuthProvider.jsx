import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.confiq";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setloading] = useState(true)
    const provider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateuser = (name, image) => {
        return updateuser(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }
    const signinwithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
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
    const authinfo = { user, updateuser, createUser, loginUser, logOut, loading, signinwithGoogle }
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