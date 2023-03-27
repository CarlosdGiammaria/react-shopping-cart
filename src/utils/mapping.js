import { ShoppingCart } from './ShoppingCart'

export const addProductToCart = (cart, product) => {
  const newCart = cart.map((product) => ({ ...product }))
  const newShoppingCart = new ShoppingCart(newCart)

  newShoppingCart.addProductCart(product, 1)

  return newShoppingCart
}
