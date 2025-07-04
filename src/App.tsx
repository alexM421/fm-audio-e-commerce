//ReactRouter
import { Route, Routes } from 'react-router-dom'
//CSS
import './App.css'
//layouts
import HomeLayout from './layouts/HomeLayout/HomeLayout'
//pages
import Home from './pages/Home/Home'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import ProductPage from './pages/ProductPage/ProductPage'
//components
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {

  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
          <Route index element={<Home/>}/>
          <Route path=":category" element={<CategoryPage/>}/>
          <Route path=":category/:slug" element={<ProductPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
