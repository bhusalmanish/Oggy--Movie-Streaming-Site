import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'

import PageNotFound from './pages/PageNotFound'
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme/Theme';
import MoviePlay from './pages/MoviePlay'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './Admin_pannel/pages/Dashboard'
import Movies from './Admin_pannel/pages/Movies'
import UserInfo from './Admin_pannel/pages/UserInfo'


export default function App() {
  return (
    <><ThemeProvider theme={theme} >
      <NavBar />
      <Routes>
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/Movie' element={<MoviePlay />} />
        {/* admin */}
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Movies' element={<Mov
          ies />} />
        <Route path='/userInfo' element={<UserInfo />} />



        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
    </>
  )
}


