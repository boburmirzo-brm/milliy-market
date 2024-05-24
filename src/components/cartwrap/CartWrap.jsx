import React from 'react'
import '../../sass/cart.scss'
import { PRODUCTS } from '../../static'
import img from '../../assets/images/templatePhoto.svg'

function CartWrap() {
    
    let carts = PRODUCTS?.map(el => (
        <div className='cart__pros__pro' key={el.id}>
            <div className='cart__pros__pro__title'>
                <img src={img} alt="" />
                <p>{el.title}</p>
            </div>
            <p className='cart__pros__pro__price'>${el.price}</p>
            <div className='cart__pros__pro__btns'>
                <button >-</button>
                <p>1</p>
                <button >+</button>
            </div>
            <p className='cart__pros__pro__price'>${el.price}</p>
        </div>
    ))
  return (
    <div className='cart'>
        <div className='cart__pros'>
            <div className='cart__pros__titles'>
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>
            {carts}
            <div className='cart__pros__btns'>
                <button className='cart__pros__btns__btn'>Return To Shop</button>
                <button className='cart__pros__btns__btn'>Update Cart</button>
            </div>
        </div>
        <div className='cart__check'>
            <div className='cart__check__total'>
                <p className='cart__check__total__title'>Cart Total</p>
                <div className='cart__check__total__wrap'>
                    <p>Subtotal: </p>
                    <p>price</p>
                    <p>Subtotal:</p>
                    <p>price</p>
                    <p>Subtotal:</p>
                    <p>price</p>
                </div>
                <button className='cart__check__total__btn'>Process to checkout</button>
            </div>
        </div>
    </div>
  )
}

export default CartWrap