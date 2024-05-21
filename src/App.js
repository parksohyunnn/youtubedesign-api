import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'));
const Recommend = lazy(() => import('./pages/Recommend'));
const Popularity = lazy(() => import('./pages/Popularity'));
const Website = lazy(() => import('./pages/Website'));
const Photoshop = lazy(() => import('./pages/Photoshop'));
const Illustration = lazy(() => import('./pages/Illustration'));
const Figma = lazy(() => import('./pages/Figma'));
const PremierPro = lazy(() => import('./pages/PremierPro'));
const AfterEffects = lazy(() => import('./pages/AfterEffects'));
const Cinema4d = lazy(() => import('./pages/Cinema4d'));
const Not = lazy(() => import('./pages/Not'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
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
      </Suspense>
    </BrowserRouter >
  );
}

export default App
