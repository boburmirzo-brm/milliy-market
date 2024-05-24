import React, { memo } from 'react'
import ProductWrapper from '../../components/product/ProductWrapper'
import { PRODUCTS } from "../../static"

const Home = () => {

  return (
    <div>
      <h2>Home</h2>
      <ProductWrapper data={PRODUCTS} />
    </div>
  )
}

export default memo(Home)