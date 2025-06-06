import React from 'react'
import { Route, Routes } from 'react-router'
import './App.css'

import HomeLayout from './layouts/HomeLayout/HomeLayout'
import Home from './pages/Home/Home'
import Headphones from './pages/Headphones/Headphones'
import Speakers from './pages/Speakers/Speakers'
import Earphones from './pages/Earphones/Earphones'
import ProductPage from './pages/ProductPage/ProductPage'
import ScrollToTheTop from './components/ScrollToTheTop/ScrollToTheTop'
import Checkout from './pages/Checkout/Checkout'

function App() {


  return (
    <>
    <ScrollToTheTop/>
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<Home/>}/>

        <Route path='headphones' element={<Headphones/>}/>
        <Route path='speakers' element={<Speakers/>}/>
        <Route path='earphones' element={<Earphones/>}/>

        <Route path="headphones/:slug" element={<ProductPage />} />
        <Route path="speakers/:slug" element={<ProductPage />} />
        <Route path="earphones/:slug" element={<ProductPage />} />

        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
