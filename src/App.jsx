import React from 'react'
import { Route, Routes } from 'react-router'
import './App.css'

import HomeLayout from './layouts/HomeLayout/HomeLayout'
import Home from './pages/Home/Home'
import Headphones from './pages/Headphones/Headphones'
import Speakers from './pages/Speakers/Speakers'
import Earphones from './pages/Earphones/Earphones'

function App() {


  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/headphones' element={<Headphones/>}/>
        <Route path='/speakers' element={<Speakers/>}/>
        <Route path='/earphones' element={<Earphones/>}/>
        <Route path='/checkout' element={<h1>Checkout</h1>}/>
      </Route>
    </Routes>
  )
}

export default App
