import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './layout/Layout'
import Shop from './pages/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>

 

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
             <Route index element={<Home/>} />
             <Route path='/shop' element={<Shop/>} />

          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
