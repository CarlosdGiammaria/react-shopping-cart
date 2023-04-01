import React from 'react'
import { useStore } from 'killa'
import { shoppingCartStore } from '../../store'

function CartProduct({ id, name, image, quantity, price }) {
  const { setState } = useStore(shoppingCartStore, (state) => {
    return {
      products: state.products,
      deleteQuantityById: state.deleteQuantityById,
      addProductCart: state.addProductCart
    }
  })


  const handleDeleteQuantity = (id, quantity) => {
    setState((state) => {
      state.deleteQuantityById(id, quantity)
      const newState = {
        ...state,
        products: state.products,
      }
      return newState
    })
  }
  // const handleAddQuantity = (id, quantity) => {
  //   setState((state) => {
  //     state.addProductCart(id, quantity)
  //     const newState = {
  //       ...state,
  //       products: state.products,
  //     }
  //     return newState
  //   })
  // }
  const handleAddQuantity = () => {
    setState((state) => {
      const index = state.products.findIndex((product) => product.id === id)
      if (index === -1) return state

      const newProduct = {
        ...state.products[index],
        quantity: state.products[index].quantity + 1,
      }
      
      const newProducts = [
        ...state.products.slice(0, index),
        newProduct,
        ...state.products.slice(index + 1),
      ]

      const newState = {
        ...state,
        products: newProducts,
      }
      return newState
    })
  }

  

  return (
    <div className='list__items'>
      <div className='shopping-cart__card js-cart-item' data-id={id}>
        <div className='card__img'>
          <img src={image} alt='' />
        </div>
        <div className='card__details'>
          <span>{name}</span>
          <span>
            <i className='fa-regular fa-money-bill-1'></i>
            {price}
          </span>
          <span>
            <i className='fa-solid fa-boxes-stacked'></i>
            {quantity}
          </span>
          <div className='product__action'>
            <button className='btn' onClick={handleAddQuantity}>
              <i className='fa-solid fa-circle-plus icon'></i>
            </button>
            <button
              className='btn js-delete-quntity'
              onClick={() => handleDeleteQuantity(id, 1)}
            >
              <i className='fa-solid fa-circle-minus icon'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct