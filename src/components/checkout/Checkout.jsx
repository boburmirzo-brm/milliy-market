import React, { useState } from 'react'
import { PatternFormat } from 'react-number-format'
import { useSelector } from 'react-redux'
import payments from '../../assets/images/checkout/payment.png'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
const Checkoutcomponent = () => {
  const [value, setValue] = useState('Bank');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(value);
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
        <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
          <div className='checkspace'>
          <div>
          <FormControlLabel value="Bank" control={<Radio />} label="Bank" />
          </div>
          <img src={payments} alt="" />
          </div>
          <div>
          <FormControlLabel value="Cash on delivery" control={<Radio />} label="Cash on delivery" />
          </div>
          </RadioGroup>
          </FormControl>
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
