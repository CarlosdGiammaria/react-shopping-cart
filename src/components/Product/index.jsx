import React from 'react'
import { useStore } from 'killa'

import { shoppingCartStore } from '../../store'
import styles from './styles.module.css'


function Product({ id, name, image, quantity, price }) {
  const { setState } = useStore(shoppingCartStore, (state) => {
    return {
      products: state.products,
      addProductCart: state.addProductCart
    }
  })
  
  const handleAdd = () => {
    let product = { id, name, image, quantity, price }
    
    setState((state) => {
      state.addProductCart(product, 1)

      const newState = {
        ...state,
        products: state.products,
      }

      return newState
    })
  }
  
  return (
    <div className={styles.product__card}>
      <div className={styles.products__img}>
        <img src= {image} alt=''/>
        <div className={styles.products__actions}>
          <button
            className='btn btn--full btn--success'
            data-product-id={id}
            onClick={handleAdd}
          >
            Add to Cart
            <i className='fa-solid fa-cart-plus'/>
          </button>
        </div>
      </div>
      <div className={styles.product__info}>
        <span>{name}</span>
        <span><i className='fa-solid fa-boxes-stacked'/>{quantity}</span>
        <span><i className='fa-regular fa-money-bill-1'/>{price}</span>
      </div>
    </div>
  )
}

export default Product
