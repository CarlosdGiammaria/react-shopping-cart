import React from 'react'
import { useStore } from 'killa'
import CartProduct from './CartProduct'
import { store } from '../../store'


function Cart( { handleOpenSlider} ) {
  const { state, setState } = useStore(store, (state) => {
    return {
      products: state.cart.getShoppingCart(),
      total: state.cart.totalPrice(),
      inventory: state.inventory
    }
  })


  const handleBuy = () => {
    let items = state.products
    let inventory = state.inventory

    items.forEach((product) => {
      return inventory.deleteQuantity(product.id, product.quantity)
    })


    setState((state) => {
      return {
        ...state,
        inventory
      }
    })
  }

  return (
    <div className="shopping-cart">
      <div className="shopping-cart__top">
        <button className="btn" onClick={handleOpenSlider}>
          <i className="fa-sharp fa-solid fa-circle-xmark icon"></i>
        </button>
        <h3 className="shopping-cart__title">Your Products</h3>
      </div>

      <div className="shopping-cart__list">
        {
          state.products.map((element) => {
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
      <div className="shopping-cart__payable-value">
        <span>${state.total}</span>
        <button className="btn btn--success" onClick={handleBuy}>
          <i className="fa-solid fa-cart-arrow-down icon"/>
        </button>
      </div>
    </div>

  )
}

export default Cart