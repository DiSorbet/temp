import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import SharedLayout from './pages/SharedLayout'
import { AppProvider } from './context'
function App() {
  return (
    <AppProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='cocktail/:id' element={<SingleCocktail/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </AppProvider>
  )
}

export default App
