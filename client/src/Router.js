import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import CartContainer from "./container/CartContainer.jsx";
import * as pages from "./pages";
import { useSelector } from "react-redux";

export const Router = () => {
  const cartShow = useSelector((state) => state.cart.cartShow);
  return (
    <Routers>
      <Header />
      <Routes>
        <Route path="/" element={<pages.LoginPage />} />
        <Route path="/Men" element={<pages.GenderProducts />} />
        <Route path="/Women" element={<pages.GenderProducts />} />
        <Route path="/about" element={<pages.AboutPages />} />
        <Route path="/product/:id" element={<pages.DetailPage />} />
        <Route path="/contact" element={<pages.ContactPage />} />
        <Route path="/home" element={<pages.Home />} />
        <Route path="/register" element={<pages.RegisterPage />} />
        <Route path="/payment" element={<pages.PaymentPage />} />
        <Route path="/search/:text" element={<pages.SearchPage />} />
      </Routes>
      <Footer />
      {cartShow && <CartContainer />}
    </Routers>
  );
};
