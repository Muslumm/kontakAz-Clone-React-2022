import React from 'react'
import { useSelector } from 'react-redux'
import './categories.css'
import { categoriesSelectors } from './categoriesSlice'
import {NavLink} from 'react-router-dom'

function Categories() {

  const categories = useSelector(categoriesSelectors.selectAll)

  // first categories
  const renderedCategories = categories.map(link => {
    return <div className="category" key={link.id}>
      <NavLink to={link.link} className='category_link'>{link.name}
      <ul  className='sub_menu'>
               {
                   link.hasSubMenu && (
                    link.subMenu.map(menu=>{
                        return  <li className='subMenu_List'>
                        <NavLink to={menu.link} className="subMenu_Link">{menu.name}</NavLink>
                   </li>
                    })
                   )
               }
           </ul>
      </NavLink>
    </div>
  })

  // subMenus 


  return (
    <div className='categories_section'>
      {
        renderedCategories
      }
    </div>
  )
}

export default Categories