import React, { memo } from 'react'
import ProductWrapper from '../../components/product/ProductWrapper'
import { PRODUCTS } from "../../static"
import Hero from '../../components/hero/Hero'

const Home = () => {

  return (
    <div>
      {/* <h2>Home</h2> */}
      <Hero />
      <ProductWrapper data={PRODUCTS} />
    </div>
  )
}

export default memo(Home)