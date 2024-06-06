import { Listing } from './components/Listing'
import data from './data/etsy.json'
import './App.css'

function App() {
  return (
    <div>
      <Listing items = { data }/>
    </div>
  )
}

export default App
