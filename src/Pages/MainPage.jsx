import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'

export const MainPage = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
    </div>
  )
}
