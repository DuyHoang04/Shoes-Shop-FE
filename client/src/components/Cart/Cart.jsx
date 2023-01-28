import React, { useState, useEffect } from "react";
import { ArrowBack, RemoveRedEye } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import EmptyImg from "../../img/emptyCart.svg";
import { CartItem } from "./CartItem";
import { Link, useLocation } from "react-router-dom";

export const Cart = (props) => {
  const { cartItem, hideCartRequest, addCartItemRequest, userId, userToken } =
    props;
  const [total, setTotal] = useState(0);
  const { pathname } = useLocation();
  const newPath = pathname.slice(1, 10);

  const handleCartShow = () => {};

  useEffect(() => {
    let totalPrice = cartItem.reduce(function (accumulator, item) {
      return accumulator + item.quantity * item.price;
    }, 0);
    setTotal(totalPrice);
  });

  const DeleteAll = async () => {};

  return (
    <>
      <motion.div
        className="cart__container"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
      >
        <div className="cart__container-top">
          <IconButton className="icon" onClick={(e) => hideCartRequest()}>
            <ArrowBack />
          </IconButton>
          {newPath === "thanhtoan" ? (
            <></>
          ) : (
            <>
              <p>Giỏ Hàng</p>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="clear-cart"
                onClick={DeleteAll}
              >
                Xóa hết <RemoveRedEye />
              </motion.button>
            </>
          )}
        </div>
        {cartItem.length > 0 ? (
          <div className="cart-container-products">
            <div className="cart-item">
              {cartItem?.map((product, index) => (
                <CartItem
                  key={index}
                  product={product}
                  path={newPath}
                  addCartItemRequest={addCartItemRequest}
                  userId={userId}
                  userToken={userToken}
                />
              ))}
            </div>
            <div className="cart__container--payment">
              <div className="payment-info">
                <p className="title">Giá</p>
                <p className="price">$ {total}</p>
              </div>
              <div className="payment-info">
                <p className="title">Shipping</p>
                <p className="price">Free</p>
              </div>
              <div className="divider"></div>
              <div className="payment-total">
                <div className="total-info">
                  <p className="title">Tổng</p>
                  <p className="price">$ {total}</p>
                </div>
                {newPath === "thanhtoan" ? (
                  <></>
                ) : (
                  <Link
                    to={`/payment/${userId}`}
                    state={{ cartItem, total }}
                    onClick={(e) => hideCartRequest()}
                  >
                    <motion.button
                      className="btn-cart"
                      whileTap={{ scale: 0.8 }}
                      type="button"
                    >
                      Thanh Toán
                    </motion.button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="cart__container-empty">
            <img src={EmptyImg} alt="" className="empty-img" />
            <p className="empty-desc">Hãy thêm vài sản phẩm</p>
          </div>
        )}
      </motion.div>
    </>
  );
};
