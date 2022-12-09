import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HerosRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='dc' element={<DcPage />} />
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='hero/:id' element={<HeroPage />} />
          <Route path='/' element={<Navigate to={'/heros/marvel'} />} />
        </Routes>
      </div>
    </>
  )
}
