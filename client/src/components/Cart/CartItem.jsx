import React from "react";
import { Remove, Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { getHostName } from "../../util";
import { accessToken } from "../../selectors";

export const CartItem = (props) => {
  const { product, accessToken, addCartItemRequest } = props;

  const handleCartItem = (isDecrease) => {
    if (accessToken) {
      const dataCart = {
        quantity: 1,
      };
      addCartItemRequest({
        dataCart,
        productId: product.productId,
        decrease: isDecrease,
      });
    }
  };

  return (
    <div>
      {" "}
      <div className="cartItem">
        <img
          src={`${getHostName()}/images/${product.image[0].name}`}
          alt=""
          className="cartItem__img"
        />
        <div className="cartItem__info">
          <div className="cartItem__info--name">{product.nameProduct}</div>
          <div className="cart__info-total">
            <span className="price">${product?.price}</span>
          </div>
        </div>
        <div className="cartItem__qty">
          <IconButton onClick={(e) => handleCartItem(true)}>
            <Remove />
          </IconButton>
          <p>{product.quantity}</p>
          <IconButton onClick={(e) => handleCartItem(false)}>
            <Add />
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
