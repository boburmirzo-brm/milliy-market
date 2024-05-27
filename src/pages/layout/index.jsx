import React, { memo } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import SubHeader from '../../components/sub-header/SubHeader'

const Layout = () => {
  return (
    <>
      <SubHeader />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default memo(Layout)