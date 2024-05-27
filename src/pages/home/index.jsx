import React, { memo } from 'react'
import ProductWrapper from '../../components/product/ProductWrapper'
import Hero from '../../components/hero/Hero'
import Homesection from '../../components/homesection/Homesection'
import { useGetProductsQuery } from '../../context/api/productsApi'

const Home = () => {
  let {data, isLoading} = useGetProductsQuery()
  return (
    <div>
      <Hero />
      <ProductWrapper data={data?.data} />
      <Homesection />
    </div>
  );
};

export default memo(Home);
