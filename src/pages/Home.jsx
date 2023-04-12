import React from 'react'
import { inventoryStore } from '../store'
import { useStore } from 'killa'
import Product from '../components/Product'
import {useParams} from 'react-router-dom'
import NotFound from  './NotFound'

function Home() {
  const [state] = useStore(inventoryStore, (state) => {
    return {
      products: state.articles,
      filter: state.filter,
    }
  })
  
  let products = state.products  
  let params = useParams()

  if (params.category) {
    products = state.products.filter((product) => product.category.toLowerCase() === params.category)
    console.log(products)
  }
  if(!products.length) {
   return <NotFound />
  } 

  return (
    <>
      {
        products.map((element) => {
        return (
          <Product
            key={element.id}
            id={element.id}
            name={element.name}
            image={element.image}
            quantity={element.quantity}
            price={element.price}
          />
        )
      })}
    </>
  )
}

export default Home