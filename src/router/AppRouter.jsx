import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { HerosRoutes} from '../heros'
import { LoginPage } from '../auth'
import { PublicRoute} from "./PublicRoute.jsx";
import { PrivateRoute } from "./PrivateRoute.jsx";


export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/heros' element={<PrivateRoute><HerosRoutes/></PrivateRoute>}/>
        <Route path='/*' element={<Navigate to = "/login"/>}/>
    </Routes>
    </>
  )
}
