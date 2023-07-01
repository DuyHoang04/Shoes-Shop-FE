import { getHostName, toastError, toastSuccess } from "../util";

function createOrderItem({
  orderData,
  navigate,
  is_checkout_cart,
  accessToken,
}) {
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/orders?is_cart_checkout=${is_checkout_cart}`;
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(orderData),
    };
    fetch(url, config)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((error) => {
            throw new Error(error.message);
          });
        }
      })
      .then((res) => {
        resolve(res);
        toastSuccess(res.message);
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      })
      .catch((error) => {
        reject(error);
        toastError(error.message);
      });
  });
}

export { createOrderItem };
