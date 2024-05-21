import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './pages/Home'
import Recommend from './pages/Recommend'
import Popularity from './pages/Popularity'
import Website from './pages/Website'
import Photoshop from './pages/Photoshop'
import Illustration from './pages/Illustration'
import Figma from './pages/Figma'
import PremierPro from './pages/PremierPro'
import AfterEffects from './pages/AfterEffects'
import Cinema4d from './pages/Cinema4d'
import Not from './pages/Not'
import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recommend' element={<Recommend />} />
          <Route path='/popularity' element={<Popularity />} />
          <Route path='/website' element={<Website />} />
          <Route path='/photoshop' element={<Photoshop />} />
          <Route path='/illustration' element={<Illustration />} />
          <Route path='/figma' element={<Figma />} />
          <Route path='/premierPro' element={<PremierPro />} />
          <Route path='/afterEffects' element={<AfterEffects />} />
          <Route path='/cinema4d' element={<Cinema4d />} />
          <Route path='/*' element={<Not />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
