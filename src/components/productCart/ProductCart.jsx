import React, { useState } from "react";
import { PRODUCTS } from "../../static/index";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductCart = () => {
  const [add, setAdd] = useState(1);
  let product = PRODUCTS?.map((el) => (
    <div className="cart__info cart__info2">
      <div className="cart__img">
        <button className="delete">
          {" "}
          <MdDeleteForever className="delete__cart" />
        </button>
        <img src={el.urls[0]} alt={el.title} />
        <p>{el.title.substring(0, 17)}...</p>
      </div>
      <p className="cart__price">${el.price}</p>
      <div className="cart__buttons">
        <button onClick={() => setAdd(add + 1)}>
          <FaPlus />
        </button>
        <p>{add}</p>
        <button disabled={add < 2} onClick={() => setAdd(add - 1)}>
          <FaMinus />
        </button>
      </div>
      <p className="total">${el.price * add}</p>
    </div>
  ));
  return (
    <div className="container cart">
      <div className="cart__info cart__info3">
        <p className="info info2">Product</p>
        <p className="info ">Price</p>
        <p className="info"> Quantity</p>
        <p className="info">Subtotal </p>
      </div>
      {product}
      <div className="update__buttons">
        <button>
          <Link to={"/"}>Return To Shop</Link>
        </button>
        <button>Update Cart</button>
      </div>
      <div className="coupon">
        <div className="coupon__card">
          <input type="text" placeholder="Coupon Code" />
          <button>Apply Coupon</button>
        </div>
        <div className="coupon__check">
          <p>Cart Total</p>
          <div className="check">
            <p> Subtotal:</p>
            <p>$1750</p>
          </div>
          <hr />

          <div className="check">
            <p> Shipping:</p>
            <p>Free</p>
          </div>
          <hr />

          <div className="check">
            <p>Total:</p>
            <p>$1750</p>
          </div>
          <hr />

          <button>
            <Link to={"/checkout"}>Procees to checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
