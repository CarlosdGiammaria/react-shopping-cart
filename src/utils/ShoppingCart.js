export class ShoppingCart {
  constructor(products = []) {
    this.products = products
  }

  getShoppingCart() {
    return this.products
  }

  getItems() {
    return this.products.reduce((acc, cur) => acc + cur.quantity, 0)
  }

  addProductCart(product, quantity) {
    let index = this.products.findIndex((data) => data.id === product.id)
    let productInsideCart = this.products[index]

    if (!product.quantity) return false

    if (productInsideCart) {
      if (productInsideCart.quantity + quantity > product.quantity) {
        return false
      }
      this.products[index].quantity += quantity
    } else {
      this.products.push({ ...product, quantity })
    }
    return true
  }

  deleteQuantityById(id, quantity) {
    const product = this.products.find((product) => product.id === id)
    if (!product) return

    const _quantity = product.quantity - quantity

    if (_quantity > 0) {
      product.quantity = product.quantity - quantity
      return product.quantity
    }
    this.products = this.products.filter((product) => product.id !== id)
  }

  totalPrice() {
    const products = this.products
    const totalP = products.reduce((acc, cur) => {
      const total = cur.quantity * cur.price
      return acc + total
    }, 0)

    return totalP
  }

  clearCart() {
    this.products = []
  }

  buy(ca) {
    let success
    if (ca) {
      success = ca({
        products: this.products,
        total: this.totalPrice(),
      })
    }

    success && this.clearCart()

    return success
  }
}
