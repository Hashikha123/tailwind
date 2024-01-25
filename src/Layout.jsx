import React from 'react'
import Header from './RoterCrash/Header/Header'
import Footer from './RoterCrash/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
