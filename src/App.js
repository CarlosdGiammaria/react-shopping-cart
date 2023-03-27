import { useStore } from 'killa'

import Header from './components/Header'
import Product from './components/Product'
import Layout from './components/Layout'
import { store } from './store'

import './App.css'

function App() {
  const { state } = useStore(store, (state) => state.inventory.articles)

  return (
    <div className="App">
      <Header />
      <Layout>
        {state.map((element) => {
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
