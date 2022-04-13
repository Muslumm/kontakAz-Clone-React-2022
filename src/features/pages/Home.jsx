import React from 'react'
import Info from '../components/info_section/Info'
import Categories from '../components/categories/Categories'
import Slider from '../components/slider/Slider'
import './home.css'



function Home() {
  return (
    <div className='page'>
       <Info/>
       <div className="content">
           <Categories/>
           <Slider/>
       </div>
    </div>
  )
}

export default Home