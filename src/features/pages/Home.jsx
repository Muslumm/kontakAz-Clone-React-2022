import React from 'react'
import Info from '../components/info_section/Info'
import Categories from '../components/categories/Categories'
import Carusel from '../components/carusel/Carusel'
import './home.css'


function Home() {
  return (
    <div className='page'>
       <Info/>
       <div className="content">
           <Categories/>
           <Carusel/>
       </div>
    </div>
  )
}

export default Home