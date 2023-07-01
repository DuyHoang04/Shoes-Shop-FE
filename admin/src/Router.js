import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import * as pages from "./pages";

export const Router = () => {
  return (
    <Routers>
      <>
        {window.location.pathname !== "/login" && <Topbar />}
        <div className="container">
          {window.location.pathname !== "/login" && <Sidebar />}
          <Routes>
            <Route path="/" element={<pages.HomePage />} />
            <Route path="/product" element={<pages.ProductListPage />} />
            <Route path="/product/:id" element={<pages.ProductPage />} />
            <Route path="/addProduct" element={<pages.NewProductPage />} />
            <Route path="/user" element={<pages.UserListPage />} />
            <Route path="/user/:id" element={<pages.UserPage />} />
            <Route path="/addUser" element={<pages.NewUserPage />} />
            <Route path="/login" element={<pages.LoginPage />} />
          </Routes>
        </div>
      </>
    </Routers>
  );
};
