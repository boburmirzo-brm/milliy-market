import React from 'react'
import Checkoutcomponent from '../../components/checkout/Checkout'

const Checkout = () => {
  return (
    <div className='checkout'>
      <p className='navigate'>Account / My Account / Product / View Cart / <strong>CheckOut</strong></p>
      <p className='checktitle'>Billing Details</p>
      <Checkoutcomponent />
    </div>
  )
}

export default Checkout