import React from 'react'
import { useStore } from 'killa'
import CartProduct from './CartProduct'
import { shoppingCartStore, inventoryStore } from '../../store'

function Cart( { handleOpenSlider} ) {
  const {
      state: cart, 
      setState: setCartState 
    } = useStore(shoppingCartStore,
    (state) => {
      return {
      products: state.products,
      total: state.totalPrice(),
    }
  })

  const {
    state: inventory,
    setState 
  } = useStore(inventoryStore, (state) => state)

  const handleBuy = () => {
    setState((state) => {
      let items = cart.products
  
      items.forEach((product) => {
        return inventory.deleteQuantity(product.id, product.quantity)
      })

      return {
        ...state,
        articles: inventory.articles,
      }
    })

    setCartState(() => {
      return {
        products: []
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
          cart.products.map((element) => {
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
        <span>${cart.total}</span>
        <button className="btn btn--success" onClick={handleBuy}>
          <i className="fa-solid fa-cart-arrow-down icon"/>
        </button>
      </div>
    </div>

  )
}

export default Cart