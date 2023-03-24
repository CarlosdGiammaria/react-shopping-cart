import killa from 'killa'
import data from '../db/data'

export const store = killa({ inventory: data, cart: [] })
