import React from "react";
import { Remove, Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const CartItem = (props) => {
  const { product, addCartItemRequest, userId, userToken } = props;

  const handleAddCartItem = () => {
    if (userId) {
      const cartItem = {
        name: product?.name,
        quantity: 1,
        image: product?.image,
        price: product?.price,
        product: product?.product,
      };
      addCartItemRequest({ userId, cartItem, userToken });
    }
  };
  const handleRemoveCartItem = () => {
    if (userId) {
      const cartItem = {
        name: product?.name,
        quantity: 1,
        image: product?.image,
        price: product?.price,
        product: product?.product,
      };
      addCartItemRequest({ userId, cartItem, decrease: true, userToken });
    }
  };
  return (
    <div>
      {" "}
      <div className="cartItem">
        <img src={product.image} alt="" className="cartItem__img" />
        <div className="cartItem__info">
          <div className="cartItem__info--name">{product.name}</div>
          <div className="cart__info-total">
            <span className="price">${product?.price}</span>
          </div>
        </div>
        <div className="cartItem__qty">
          <IconButton>
            <Remove onClick={handleRemoveCartItem} />
          </IconButton>
          <p>{product.quantity}</p>
          <IconButton>
            <Add onClick={handleAddCartItem} />
          </IconButton>
        </div>
        {/* {path === "thanhtoan" ? (
          <></>
        ) : (
          <div className="cartItem__remove">
            <HighlightOff />
          </div>
        )} */}
      </div>
    </div>
  );
};
