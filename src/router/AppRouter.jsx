import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Navbar } from '../ui/components/Navbar'
import { DcPage } from '../heros/pages/DcPage'
import { MarvelPage } from '../heros/pages/MarvelPage'

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
