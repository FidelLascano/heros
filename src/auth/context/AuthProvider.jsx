import React, {useContext} from 'react';
import {AuthContext} from "./AuthContext";
import {authReducer} from "./authReducer.js";

const initialState = {
  logged: false,
};
export const AuthProvider = ({children}) => {
    const [state, dispatch] = useContext(authReducer, initialState);
    return (
        <AuthContext.Provider value={{}}>
            { children }
        </AuthContext.Provider>
    );
};