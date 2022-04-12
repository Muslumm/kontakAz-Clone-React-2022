import React from 'react'
import {FiGrid} from 'react-icons/fi'
import {FaSearch} from 'react-icons/fa'
import {AiOutlineUser,AiOutlineHeart} from 'react-icons/ai'
import {RiScales3Line} from 'react-icons/ri'
import {BsHandbag} from 'react-icons/bs'
import flag_Aze from '../images/flag_Aze.jpg'


import './header.css'


function Header() {
  return (
    <div className='header_section'>

      {/* header left */}

      <div className="header_left">
        <a href="/" className="logo">Kontakt Az</a>
        <div className="menu_toggle">
          <div className="menu_icon_container">
            <FiGrid size={25} className="menu_icon"/> <span className='menu_text'>Menyu</span>
          </div>
        </div>
      </div>

{/* header center */}

      <div className="header_center">
        <form className="header_search_form">
        <FaSearch className='search_icon'/>  <input type="text" placeholder="Mehsul uzre axtaris..."/>
        </form>
      </div>

{/* header right */}

      <div className="header_right">
         <div className="header_right_icon_container">
         <AiOutlineUser size={22} />
         </div>

         <div className="header_right_icon_container">
           <RiScales3Line size={22}/>
         </div>

         <div className="header_right_icon_container">
           <AiOutlineHeart size={22} className="relative_icon"/> <span className='cart_quantity'>1</span>
         </div>

         <div className="header_right_icon_container">
           <BsHandbag size={22}/>
         </div>

         <div className="header_right_select_container">
           <div className="select_img_container">
             <img src={flag_Aze} alt="languages picture" />
           </div>
            <select className='select_language'>
              <option value="AZE">AZE</option>
              <option value="ENG">ENG</option>
            </select>
         </div>
      </div>
    </div>
  )
}

export default Header