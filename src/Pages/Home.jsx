import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'
import Header from '../Component/Header'

const Home = () => {
  return (
    <div>
        <Header/>
        <h3>Bienvenidos a nuestro e-commerce</h3>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Home