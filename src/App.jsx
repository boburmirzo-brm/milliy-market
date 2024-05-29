import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Cart from "./pages/cart";
import Detail from "./pages/detail";
import Checkout from "./pages/checkout";
import NotFound from "./pages/not-found";
import Wishlist from "./pages/wishlist";
import Admin from "./pages/admin";
import Create from "./pages/admin/create";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="admin" element={<Admin />}>
            <Route path="create" element={<Create />} />
          </Route>
          <Route path="/product/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
