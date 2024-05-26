import { useState } from 'react'
import { PRODUCTS } from '../../static'
import { Link } from 'react-router-dom'


function CartWrap() {
    const [count, setCount] = useState(1)

    return (
        <>
            <div className='cart_link'>
                <strong><Link className='link' to={"/"}>Home</Link> / Cart</strong>
            </div>
            <div className='cart'>
                <div className='cart_sort'>
                    <strong>Product</strong>
                    <strong>Price</strong>
                    <strong>Quantity</strong>
                    <strong>Subtotal</strong>
                </div>
                <div>
                    {
                        PRODUCTS.map(product =>
                            <div className='cart_sort' key={product.id}>
                                <img src={product.urls} alt="" />
                                <strong>${product.price}</strong>
                                <div className='btn_counts'>
                                    <button className='btn_plus' onClick={() => setCount(count - 1)}>-</button>
                                    <strong className='strong_count'>{count}</strong>
                                    <button className='btn_minus' onClick={() => setCount(count + 1)}>+</button>
                                </div>
                                <strong>${product.price * count}</strong>
                            </div>
                        )
                    }
                </div>
                <div className='btns'>
                    <button>Return To Shop</button>
                    <button>Update Cart</button>
                </div>
                <div className='carts'>
                    <div className='carts_txt'>
                        <input type="text" placeholder='Coupon Code' />
                        <button>Apply Coupon</button>
                    </div>
                    <div className='cart_info'>
                        <strong>Cart total</strong>
                        <br />
                        <br />
                        <div>
                            <strong>Subtotal:</strong>
                            <strong>$1750</strong>
                        </div>
                        <br />
                        <div>
                            <strong>Shipping:</strong>
                            <strong>Free</strong>
                        </div>
                        <br />
                        <section className='total'>
                            <strong>Total:</strong>
                            <strong>$1750</strong>
                        </section>
                        <section className='div'>
                            <Link to={"/checkout"}><button>Procees to checkout</button></Link>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartWrap