import React from 'react'

import { FaChevronDown, FaHome, FaRegHeart, FaRegUser } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <header>
        <nav className="nav__top">
          <div className="container nav__top__content">
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span>ShopNow</span></p>
            <h4>English <FaChevronDown /></h4>
          </div>
        </nav>
        <nav className="nav__main">
          <div className="container nav__main__content">
            <NavLink to="/" className="nav__logo">Exc<span>lusive</span></NavLink>
            <div className="nav__list">
              <NavLink to="/" className="nav__links">Home</NavLink>
              <NavLink to="/contact" className="nav__links">Contact</NavLink>
              <NavLink to="/about" className="nav__links">About</NavLink>
              <NavLink to="/sing-up" className="nav__links">Sign Up</NavLink>
            </div>
            <div className="nav__end">
              <div className="nav__end__content">
                <div className="nav__search__box">
                  <input className='search__input' type="text" placeholder='What are you looking for?' />
                  <button className='search__button'><CiSearch /></button>
                </div>
                <NavLink to="/wishlist" className="nav__wishlist__link">
                  <CiHeart />
                  <span>0</span>
                </NavLink>
                <NavLink to="./cart" className="nav__cart__link">
                  <PiShoppingCartLight />
                  <span>0</span>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* NAV BOTTOM */}

      <div className="nav__bottom">
        <NavLink to="/">
          <FaHome />
        </NavLink>
        <button onClick={() => setShowNavBottom(p => !p)} className="nav__bottom__btn">
          <FiMenu />
        </button>
        <NavLink to="/wishlist">
          <FaRegHeart />
          <span className='wishlist__count'>
            0
          </span>
        </NavLink>
        <NavLink to="/cart">
          <IoCartOutline />
          <span className='cart__count'>
            0
          </span>
        </NavLink>
        <NavLink to="/login">
          <FaRegUser />
        </NavLink>
      </div>
    </>
  )
}

export default Header