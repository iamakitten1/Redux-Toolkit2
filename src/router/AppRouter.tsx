import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BeersPage from '../pages/BeersPage'
import BeerPage from '../pages/BeerPage'
import HomePage from '../pages/HomePage'

const AppRouter:React.FC= () => {
  return (
     <Routes > 
        <Route path='/beers'>
            <Route index element={<BeersPage /> }/>
            <Route  path=':id' element={<BeerPage/>}/>
        </Route>
        <Route  path='/' element={<HomePage />}/>
     </Routes>
  )
}

export default AppRouter
