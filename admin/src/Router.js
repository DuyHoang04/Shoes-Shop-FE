import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import * as pages from "./pages";

export const Router = () => {
  return (
    <Routers>
      <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<pages.HomePage />} />
            <Route path="/sanpham" element={<pages.ProductListPage />} />
            <Route path="/sanpham/:id" element={<pages.ProductPage />} />
            <Route path="/themsanpham" element={<pages.NewProductPage />} />
            <Route path="/nguoidung" element={<pages.UserListPage />} />
            <Route path="/nguoidung/:id" element={<pages.UserPage />} />
            <Route path="/themnguoidung" element={<pages.NewUserPage />} />
          </Routes>
        </div>
      </>
    </Routers>
  );
};
