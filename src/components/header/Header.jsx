import React, { useEffect, useState } from 'react'

import { FaRegHeart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { GrCart } from "react-icons/gr";

import { NavLink } from 'react-router-dom';

const Header = () => {
  const [navShrink, setNavShrink] = useState(false)
  const [search, setSearch] = useState(false)
  const [searchValue, setSearchValue] = useState("")


  useEffect(() => {
    if (searchValue !== "") {
      setSearch(true)
    }
  }, [searchValue])

  const handleNavShrink = () => {
    if (window.scrollY > 0) {
      setNavShrink(true)
    } else {
      setNavShrink(false)
    }
  }

  window.addEventListener('scroll', handleNavShrink)

  return (
    <>
      <header style={search ? { top: "48px" } : { top: "0" }} className={`header ${navShrink ? "nav__shrink" : ""} ${search ? "show__search__box" : ""}`} id='header'>
        <nav className="nav container">
          <NavLink className="nav__logo">Milliy Market</NavLink>

          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to='/'>
                Home
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink className="nav__link" to='/contact'>
                Contact
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink className="nav__link" to='/about'>
                About
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink className="nav__link" to='/login'>
                Login
              </NavLink>
            </li>
          </ul>

          <div className="nav__actions">
            <div className={`nav__search__box ${search ? "search__box__active" : ""}`}>
              <input
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                type="text"
                className="nav__search__input"
                placeholder='What are you looking for?'
              />
              <button onClick={() => setSearch(true)} className="nav__search__btn">
                <IoSearchOutline />
              </button>
            </div>

            <NavLink to="/wishlist" className="nav__wishlist__link">
              <FaRegHeart />
              <span>0</span>
            </NavLink>

            <NavLink to="/cart" className="nav__cart__link">
              <GrCart />
              <span>0</span>
            </NavLink>

            <button onClick={() => setSearch(false)} className="search__cancel__btn">Cancel</button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header