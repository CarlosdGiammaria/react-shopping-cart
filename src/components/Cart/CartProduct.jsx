import React from 'react'
import { useStore } from 'killa'
import { shoppingCartStore,inventoryStore } from '../../store'

function CartProduct(
  { 
    id,
    name, 
    image, 
    quantity,
    price , 
    deleteQuantity, 
  }) 
{

  const [_, setState] = useStore(shoppingCartStore, (state) => {
    return {
      products: state.products,
      addProductCart: state.addProductCart
    }
  })

  const [inventory] = useStore(inventoryStore, (state)=> state.articles)

  const handleAddQuantity = () => {
    setState((state) => {
      let index = state.products.findIndex((product) => product.id === id)
      let inventoryIndex = inventory.findIndex((item) => {
        return item.id === id
      });

      if (index === -1) return state

      if(state.products[index].quantity >= inventory[inventoryIndex].quantity)return false

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
              onClick={() => deleteQuantity(id, 1)}
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