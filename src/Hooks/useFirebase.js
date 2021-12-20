import { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import initApp from '../Firebase/Firebase.iniit';

initApp()


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = (location, navigate) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // const user = result.user;
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
            }).finally(() => setLoading(false));
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // Using onAuthChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    return {
        user,
        loading,
        signInWithGoogle,
        logOut
    }

}
export default useFirebase