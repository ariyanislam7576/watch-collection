import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
export const AuthContext = createContext(null)

const AuthProvidor = ({children}) => {
    const allContext = useFirebase()
        return (
            <AuthContext.Provider value={allContext}>
                {children}
            </AuthContext.Provider>
        );
};

export default AuthProvidor;