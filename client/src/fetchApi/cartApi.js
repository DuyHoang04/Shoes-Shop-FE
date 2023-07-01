import { getHostName, toastError, toastSuccess } from "../util";

function addCartItem({ payload, accessToken }) {
  const { dataCart, productId, decrease } = payload;

  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/carts/add/${productId}?decrease=${!!decrease}`;
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(dataCart),
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
      })
      .catch((error) => {
        reject(error);
        toastError(error.message);
      });
  });
}
function getCartItem(accessToken) {
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/carts/getCartDetail`;
    const config = {
      method: "GET",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

export { addCartItem, getCartItem };
