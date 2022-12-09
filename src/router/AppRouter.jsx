import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { HerosRoutes} from '../heros'
import { LoginPage } from '../auth'


export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/heros/*' element={<HerosRoutes/>}/>
        <Route path='/*' element={<Navigate to = "/login"/>}/>
    </Routes>
    </>
  )
}
