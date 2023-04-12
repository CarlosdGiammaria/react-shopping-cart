import React, { useState } from 'react'
import { useStore } from 'killa'

import { shoppingCartStore } from '../../store'
import Cart from '../Cart'
import NavBar from '../Menu'
import styles from './styles.module.css'

const  Header = () => {
  const [slider, setSlider] = useState(false)
  const [cart] = useStore(shoppingCartStore)

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
      <NavBar/>
      <div className="btn cart " onClick={handleOpenSlider}>
        <span className="">{ cart.getItems() }</span>
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