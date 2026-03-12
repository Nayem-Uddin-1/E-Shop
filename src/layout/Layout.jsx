import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/common/footer/Footer'

function Layout() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout