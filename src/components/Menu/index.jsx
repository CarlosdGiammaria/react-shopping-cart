import React from 'react'
import { NavLink} from 'react-router-dom'
import { useStore } from 'killa'
import { inventoryStore } from '../../store'

const CATEGORIES_MAP = {
  'HOME_CATEGORY': 'Home use',
  'PERSONAL_USE_CATEGORY': 'Personal Use',
  'FOOD_CATEGORY': 'Food',
}

function NavBar() {
  const [categories] = useStore(inventoryStore, (state) => state.getCategories())

  return (
    <nav className="nav">
      <ul className='nav__list'>
        <li>
          <NavLink
            to='/'
            className='list__item'
            >
            Products
          </NavLink>
        </li>
        {
          categories.map((category, i) => {
             const categoryName = category.toLowerCase()
            return (
              <li key={i}>
                <NavLink 
                  to={`/categories/${categoryName}`} 
                  className='list__item'>
                  {CATEGORIES_MAP[category]}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default NavBar