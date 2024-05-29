import { Button } from '@mui/material';
import React, { useState } from 'react'
import { PatternFormat } from 'react-number-format'
import { useSelector } from 'react-redux'
import { IoIosArrowDropdown , IoIosArrowDropup   } from "react-icons/io";

const Checkoutcomponent = () => {
  const [more, setMore] = useState(null);


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
    },{
        id: 3,
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
    },{
        id: 4,
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
        <p className='checkprss'><span>${item.price} x {item.quantity} =</span> ${item.price * item.quantity}</p>
    </li>
))
  const [number,setNumber] = useState(8)
  let allproducts = product
  product = product.slice(0,2)
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
          more ? allproducts : product
        }
        </ul>
        <div className='checkseemore'>
            <button style={{display: 'flex', justifyContent: 'center', alignItems: 'center',background: 'white'}} onClick={() => setMore(!more)}>{more ? <IoIosArrowDropup   size={30} /> : <IoIosArrowDropdown size={30} />}</button>
        </div>
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
        <div className='checkpromo'>
            <input type="text" name="" id="" placeholder='Coupon Code' />
            <Button style={{background: '#db4444' ,fontSize: '13px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Apply Cupon</Button>
        </div>
        {/* <button className='checkorder'>Place Order</button> */}
        <Button style={{background: '#db4444',fontSize: '15px',display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='checkorder' variant="contained">Place Order</Button>
      </div>
    </div>
  )
}

export default Checkoutcomponent
