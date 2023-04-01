import killa from 'killa'
import data from '../db/data'

export const inventoryStore = killa({
  filter: 'ALL',
  articles: data,
  getInventory: function () {
    return this.articles
  },
  getProductById: function (id) {
    return this.articles.find((product) => product.id === id)
  },
  getCategories: function () {
    const categories = this.articles.map((product) => product.category)
    return [...new Set(categories)]
  },
  getProductsByCategory: function (category) {
    return this.articles.filter((product) => product.category === category)
  },
  addQuantity: function (id, quantity) {
    const product = this.articles.find((product) => product.id === id)
    product.quantity = product.quantity + quantity

    return product.quantity
  },
  deleteQuantity: function (id, quantity) {
    const product = this.articles.find((product) => product.id === id)
    const _quantity = product.quantity - quantity

    if (_quantity >= 0) {
      product.quantity = product.quantity - quantity

      return true
    }

    return false
  },
  updateProduct: function (id, data = {}) {
    const { name, description, image, category, price } = data
    const product = this.articles.find((product) => product.id === id)

    product.name = name || product.name
    product.description = description || product.description
    product.image = image || product.image
    product.category = category || product.category
    product.price = price || product.price
  },
  deleteProduct: function (id) {
    const products = this.articles.filter((product) => product.id !== id)

    this.articles = products
  },
  resetInventory: function (inventory) {
    this.articles = inventory || []

    return this.articles
  },
})

export const shoppingCartStore = killa({
  products: [],
  getItems: function () {
    return this.products.reduce((acc, cur) => acc + cur.quantity, 0)
  },

  addProductCart: function (product, quantity) {
    let index = this.products.findIndex((data) => data.id === product.id)
    let productInsideCart = this.products[index]

    if (!product.quantity) return false

    if (productInsideCart) {
      if (productInsideCart.quantity + quantity > product.quantity) {
        return false
      }

      productInsideCart = {
        ...productInsideCart,
        quantity: (productInsideCart.quantity += quantity),
      }
    } else {
      this.products.push({ ...product, quantity })
    }
    return true
  },

  deleteQuantityById: function (id, quantity) {
    const product = this.products.find((product) => product.id === id)
    if (!product) return

    const _quantity = product.quantity - quantity

    if (_quantity > 0) {
      product.quantity = product.quantity - quantity
      return product.quantity
    }
    this.products = this.products.filter((product) => product.id !== id)
  },

  totalPrice: function () {
    const products = this.products
    const totalP = products.reduce((acc, cur) => {
      const total = cur.quantity * cur.price
      return acc + total
    }, 0)

    return totalP
  },

  clearCart: function () {
    this.products = []
  },
})
