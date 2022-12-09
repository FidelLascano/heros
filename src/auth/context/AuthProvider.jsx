import React, {useContext} from 'react';
import { useReducer } from 'react';
import { json } from 'react-router-dom';
import { types } from '../types/types';
import {AuthContext} from "./AuthContext";
import {authReducer} from "./authReducer.js";



const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {user, logged: !!user}
}

export const AuthProvider = ({children}) => {
    
    const [authState, dispatch] = useReducer( authReducer, {}, init);
    const login = (name = '', id = '') => 
    {
        const action = {type: types.login, payload:{logged: true, user:{name, id}}}
        localStorage.setItem("user", JSON.stringify({name, id}))
        dispatch(action);
    };

    const logout = () =>
    {
        const action = {type: types.logout}
        localStorage.removeItem("user")
        dispatch(action);
    }

       return ( <AuthContext.Provider value={{...authState, login, logout}}>
            { children }
        </AuthContext.Provider>
    );
};