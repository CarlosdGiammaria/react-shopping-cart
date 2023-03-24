import React from 'react'
import { useStore } from 'killa'

import { store } from '../../store'
import styles from './styles.module.css'

function Product({ id, name, image, quantity, price }) {
  const { state: cart, setState } = useStore(store, (state) => state.cart)

  const handleAdd = () => {
    const _product = cart.find((product) => product.id === id)
    let newCart = []

    if (_product) {
      newCart = cart.map(product => {
        if (product.id === _product.id) {
          product.quantity += 1
        }
        return {
          ...product
        }
      })
    } else {
      newCart.push({ id, name, image, price, quantity: 1 })
    }


    setState((state) => {
      return {
        ...state,
        cart: newCart
      }
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
