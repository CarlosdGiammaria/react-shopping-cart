import { useStore } from 'killa'

import Header from './components/Header'
import Product from './components/Product'
import Layout from './components/Layout'
import { store } from './store'

import './App.css'

function App() {
  const { state } = useStore(store, (state) => {
    return {
      products: state.inventory.articles,
      filter: state.filter,
    }
  })

  console.log(state)
  let products = state.products

  if (state.filter !== 'ALL') {
    products = state.products.filter(
      (product) => product.category === state.filter
    )
  }

  return (
    <div className="App">
      <Header />
      <Layout>
        {products.map((element) => {
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
      </Layout>
    </div>
  )
}

export default App
