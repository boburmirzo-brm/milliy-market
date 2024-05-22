import React, {memo} from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header/> 
      <Outlet/>
      <Footer/> 
    </>
  )
}

export default memo(Layout)