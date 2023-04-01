import React, { useState } from 'react'
import { useStore } from 'killa'

import { inventoryStore, shoppingCartStore } from '../../store'
import Cart from '../Cart'
import styles from './styles.module.css'

const CATEGORIES_MAP = {
  'HOME_CATEGORY': 'Home use',
  'PERSONAL_USE_CATEGORY': 'Personal Use',
  'FOOD_CATEGORY': 'Food',
}

const  Header = () => {
  const [slider, setSlider] = useState(false)

  const { state: cart } = useStore(shoppingCartStore)
  const { state: categories, setState } = useStore(inventoryStore, (state) => state.getCategories())

  const handleOpenSlider = () => {
    setSlider(!slider)
  }

  const handleFilter = (category) => {
    setState(() => {
      return {
        filter: category
      }
    })
  }

  return (
    <header className={styles.header}>
      <div className="header__container">
        <h1 className="header__title">CG Store</h1>
        <h5 className="header__subtitle">
          Always handling the best products and prices
        </h5>
      </div>

      <nav className="nav ">
        <ul className={styles.nav__list}>
          <li>
            <a
              href='/'
              className={styles.list__item}
              onClick={(e) => {
                e.preventDefault()
                handleFilter('ALL')
              }}
            >
              Products
            </a>
          </li>
          {
            categories.map((category, i) => {
              return (
                <li key={i}>
                  <a
                    href='/'
                    onClick={(e) => {
                      e.preventDefault()
                      handleFilter(category)
                    }}
                    className={styles.list__item}
                  >
                    {CATEGORIES_MAP[category]}
                  </a>
                </li>
              )
            })
          
          }
        </ul>
      </nav>
      
      <div className="btn" onClick={handleOpenSlider}>
        <span className="">{cart.getItems()}</span>
        <i className="fa-sharp fa-solid fa-cart-shopping icon"/>
      </div>
      {
        slider && 
        <Cart handleOpenSlider={handleOpenSlider} />
      }
    </header>
  )
}

export default Header