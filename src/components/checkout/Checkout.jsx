import React, { useState } from 'react'
import { PatternFormat } from 'react-number-format'
import { useSelector } from 'react-redux'
import payments from '../../assets/images/checkout/payment.png'
const Checkoutcomponent = () => {
  const PRODUCTS = [
    {
        id: 1,
        title: "titleadffamdkfsfdfsaifmssvsfdovpmivosfdiossdvsfda",
        description: "desc",
        price: 500,
        oldPrice: 400,
        category: "phone",
        quantity: 2,
        units: "dona",
        info: [],
        urls: ["https://www.imgacademy.com/sites/default/files/img-academy-housing-hero.jpg"],
        available: true,
    },{
        id: 2,
        title: "title",
        description: "desc",
        price: 500,
        oldPrice: 400,
        category: "phone",
        quantity: 2,
        units: "dona",
        info: [],
        urls: ["https://www.imgacademy.com/sites/default/files/img-academy-housing-hero.jpg"],
        available: true,
    }
]
  // const carts = useSelector(state => state.cart.value)  
  let totalPrice = PRODUCTS.reduce((acc, item) => acc + item.price * item.quantity, 0);  
  console.log(totalPrice);
  let product = PRODUCTS?.map((item) => (
    <li key={item.id}>
        <div>
            <img src={item.urls[0]} alt="" />
            <p>{item.title.slice(0,18)}</p>
        </div>
        <p className='checkprss'>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
    </li>
))
  const [number,setNumber] = useState(8)
  return (
    <div className='checkoutcomponent'>
      <div className='checkinputs'>
        <div>
          <p>First Name<span>*</span></p>
          <input type="text" name="" id="" />
        </div>
        <div>
          <p>Street Address<span>*</span></p>
          <input type="text" name="" id="" />
        </div>
        <div>
          <p>Town/City<span>*</span></p>
          <input type="text" name="" id="" />
        </div>
        <div>
          <p>Phone Number<span>*</span></p>
          <PatternFormat type='tel'  value={number} onChange={(e) => setNumber(e.target.value)} format="+99#(##)###-##-##" />
        </div>
      </div>
      <div className='checkproducts'>
        <ul>
        {
          product
        }
        </ul>
        <div className='totalprice'>
            <div>
              <p>Subtotal:</p><p>${totalPrice}</p>
            </div>
            <hr />
            <div>
              <p>Shipping:</p><p>Free</p>
            </div>
            <hr />
            <div>
              <p>Total:</p><p>${totalPrice}</p>
            </div>
        </div>
        <div className="checkpayment">
          <div className='checkspace'>
          <div>
          <input type="radio" name="" id="" />
          <p>Bank</p>
          </div>
          <img src={payments} alt="" />
          </div>
          <div>
          <input type="radio" name="" id=""  />
          <p>Cash on delivery</p>
          </div>
        </div>
        <div className='checkpromo'>
            <input type="text" name="" id="" placeholder='Coupon Code' />
            <button>Apply Coupon</button>
        </div>
        <button className='checkorder'>Place Order</button>
      </div>
    </div>
  )
}

export default Checkoutcomponent
