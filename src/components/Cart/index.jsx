import React from 'react'
import { useStore } from 'killa'
import CartProduct from './CartProduct'
import { store } from '../../store'


function Cart( { handleOpenSlider } ) {
  const { state } = useStore(store, (state) => state.cart.getShoppingCart())

  return (
    <div className="js-cart shopping-cart">
      <div className="shopping-cart__top">
        <button className="btn" onClick={handleOpenSlider}>
          <i className="fa-sharp fa-solid fa-circle-xmark icon"></i>
        </button>
        <h3 className="shopping-cart__title">Your Products</h3>
      </div>

      <div className="shopping-cart__list">
        {
          state.map((element) => {
            return (
              <CartProduct
                key={element.id}
                id={element.id}
                name={element.name}
                image={element.image}
                quantity={element.quantity}
                price={element.price}
              />
            )
          })
        }
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