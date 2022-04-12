import React from 'react'
import { useSelector } from 'react-redux'
import './categories.css'
import { categoriesSelectors } from './categoriesSlice'
import {NavLink} from 'react-router-dom'

function Categories() {

  const categories = useSelector(categoriesSelectors.selectAll)

  const renderedCategories = categories.map(link => {
    return <div className="category" key={link.id}>
      <NavLink to={link.link} className='category_link'>{link.name}</NavLink>
    </div>
  })

  return (
    <div className='categories_section'>
      {
        renderedCategories
      }
    </div>
  )
}

export default Categories