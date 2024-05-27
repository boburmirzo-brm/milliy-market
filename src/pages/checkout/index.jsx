import React from 'react'
import Checkoutcomponent from '../../components/checkout/Checkout'

const Checkout = () => {
  return (
    <div className="container">
      <div className='checkout'>
      <p className='navigate'>Account / My Account / Product / View Cart / <strong>CheckOut</strong></p>
      <p className='checktitle'>Billing Details</p>
      <Checkoutcomponent />
    </div>
    </div>
  )
}

export default Checkout