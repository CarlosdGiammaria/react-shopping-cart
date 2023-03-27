import React, { useState } from 'react'
import { useStore } from 'killa'
import Cart from '../Cart'
import { store } from '../../store'
import styles from './styles.module.css'

const  Header = () => {
  const [slider, setSlider] = useState(false)
  const { state } = useStore(store, (state) => state.cart.getShoppingCart())
  
  const handleOpenSlider = () => {
    setSlider(!slider)
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
            <a href='.' className={styles.list__item}>Products</a>
          </li>
        </ul>
      </nav>
      
      <div className="btn js-btn-cart" onClick={handleOpenSlider}>
        <span className="">0</span>
        <i className="fa-sharp fa-solid fa-cart-shopping icon"/>
      </div>
      {
        slider? <Cart handleOpenSlider={handleOpenSlider}/> : null
      }
    </header>
  )
}

export default Header