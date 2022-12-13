import {AuthContext} from "../auth/index.js";
import {Navigate, useLocation} from "react-router-dom";
import {useContext} from "react";

export const PrivateRoute = ({children}) =>
{
    const {pathname, search} = useLocation();
    const lastLocation = pathname + search;
    localStorage.setItem("lastLocation", lastLocation);
    const {logged} = useContext(AuthContext);
    return logged ? children : <Navigate to={'/login'}/>;
}