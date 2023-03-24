import React from 'react'

function CartProduct() {
  return (
    <div className='list__items'>
      <div className='shopping-cart__card js-cart-item' data-id='id'>
        <div className="card__img">
          <img src='image' alt=""/>
        </div>
        <div className="card__details">
          <span>name</span>
          <span><i className="fa-regular fa-money-bill-1"></i> price</span>
          <span><i className="fa-solid fa-boxes-stacked"></i> quantity</span>
          <div className="product__action">
            <button className="btn js-add-quntity">
              <i className="fa-solid fa-circle-plus icon"></i>
            </button>
            <button className="btn js-delete-quntity">
              <i className="fa-solid fa-circle-minus icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct