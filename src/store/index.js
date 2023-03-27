import killa from 'killa'
import data from '../db/data'

import { Inventory } from '../utils/Inventory'
import { ShoppingCart } from '../utils/ShoppingCart'

export const store = killa({
  inventory: new Inventory(data),
  cart: new ShoppingCart(),
})
