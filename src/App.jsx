import './App.css'
import { Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import { routes } from './routes'
import Card from './Component/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const url = 'https://api.mercadolibre.com/sites/MLA/search?q=zapatillas'
  useEffect(() => {
    axios(url)
    .then(res => setData(res.data.results))
  }, [])

  return (
    <Routes>
      <Route path={routes.home} element={<Home />}>
        <Route path={routes.shop} element={<Shop data={data}/>}>
          <Route path='/shop/:idItem' element={<Card data={data}/>}/> 
        </Route>
        <Route path={routes.contact} element={<Contact />}/>
      </Route>
      <Route path='*' element={<NotFound/>}/> 
    </Routes>
  )
}

export default App
