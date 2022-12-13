import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { AuthContext } from '../context';
import {v4} from 'uuid';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    username,
    onInputChange,
    onResetForm,
} = useForm({username:""});

const onLogin = (event) => {
  event.preventDefault();
  if(username && username.length > 0)
  {
    const id = v4()
    login(username, id);
    const lastLocation = localStorage.getItem("lastLocation");
    const goLocation = lastLocation || '/heros';
    navigate(goLocation, {replace: true});
  }
}

  return (
    <div className='container mt-5'>
      <h1>Login</h1><hr/>
      <form onSubmit={onLogin}>
        <label htmlFor="username">Username</label><br/>
        <input type="text" name="username" id="usernameid" onChange={onInputChange} value={username}/><hr/>
        <button className='btn btn-primary'>Login</button>
      </form>
    </div>
  )
}
