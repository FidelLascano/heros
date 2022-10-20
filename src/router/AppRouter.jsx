import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Navbar } from '../ui/components/Navbar'
import { DcPage, MarvelPage } from '../heros/pages'


export const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/dc' element={<DcPage/>}/>
        <Route path='/marvel' element={<MarvelPage/>}/>
        <Route path='/login' element={<MarvelPage/>}/>
        <Route path='/' element={<Navigate to = '/marvel'/>}/>
    </Routes>
    </>
  )
}
