import React from 'react'
import Navbar from '../dashboard/navbar/Navbar.jsx'
import Footer from '../dashboard/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
export default function Dashboard() {
  return (
    <>
    <Navbar />
    <Outlet/>
    <Footer />
    </>
  )
}
