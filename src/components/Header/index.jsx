import React from 'react'
import Cart from '../Cart'

import styles from './styles.module.css'

function header() {
  return (
    <header className={styles.header}>
      <div className="header__container">
        <h1 className="header__title">CG Store</h1>
        <h5 className="header__subtitle">
          Always handling the best products and prices
        </h5>
      </div>

      <nav className="nav hide js-navigation">
        <ul className="nav__list js-show-categories">
          <li>
            {/* <a href='' className='list__item js-category active' data-filter='ALL'
              >Products</a
            > */}
          </li>
        </ul>
      </nav>
      <div className="btn js-btn-cart">
        <span className="js-counter"></span>
        <i className="fa-sharp fa-solid fa-cart-shopping icon"></i>
      </div>
      <Cart />
    </header>
  )
}

export default header