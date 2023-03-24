import React from 'react'
import { useStore } from 'killa'
// import CartProduct from './CartProduct'
import { store } from '../../store'

function Cart() {
  const { state } = useStore(store, (state) => state.cart)

  console.log('state', state)

  return (
    <div className="js-cart shopping-cart">
      <div className="shopping-cart__top">
        <button className="btn js-btn-exit">
          <i className="fa-sharp fa-solid fa-circle-xmark icon"></i>
        </button>
        <h3 className="shopping-cart__title">Your Products</h3>
      </div>

    <div className="shopping-cart__list">
      HOLa
      {/* <CartProduct /> */}
    </div>
    <div className="shopping-cart__payable-value js-payable-value">
      <span className="js-total-price">$0</span>
      <button className="btn btn--success js-btn-buy">
        <i className="fa-solid fa-cart-arrow-down icon"></i>
      </button>
    </div>
  </div>

  )
}

export default Cart