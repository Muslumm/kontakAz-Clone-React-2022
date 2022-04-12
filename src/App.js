import React from 'react'
import Header from './features/header/Header'
import Home from './features/pages/Home'
import Footer from './features/footer/Footer'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App