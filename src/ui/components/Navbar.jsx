import { useContext } from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const handlerLogout = () =>{ 
        logout();
        navigate("/login",{replace:true});
    }
    
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link className="navbar-brand" to="/heros">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/heros/marvel"> Marvel </NavLink>
                    <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/heros/dc"> DC </NavLink>
                    <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/heros/search"> Search </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className={`nav-item nav-link text-primary`}>{user && user.name}</span>
                    <button className={`btn nav-item nav-link`} onClick={handlerLogout}>Logout</button>
                </ul>
            </div>
        </nav>
    )
}