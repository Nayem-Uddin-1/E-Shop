import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import Navbar from '../components/navbar/Navbar'

function Layout() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout