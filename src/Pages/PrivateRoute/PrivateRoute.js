import { CircularProgress } from '@mui/material';
import React from 'react';
import {useLocation, Navigate} from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const PrivateRoute = ({children, ...rest}) => {
    const {user,loading} = useFirebase({})
    let location = useLocation()
    if(loading){ return <CircularProgress></CircularProgress>}
    if(user.email){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} />;
    
};

export default PrivateRoute;