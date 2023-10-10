import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

const SiteLayout = () => {
  return (
    <>
      <Navbar />

      <div className="container my-5">
        <Outlet />

        <Footer />
      </div>
    </>
  )
}

export default SiteLayout