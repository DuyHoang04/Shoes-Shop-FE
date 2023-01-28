function addCartItem({ userId, cartItem, decrease, userToken }) {
  return new Promise((resolve, reject) => {
    const url = `/carts/addItem/${userId}${decrease ? "?decrease=true" : ""}`;
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${userToken}`,
      },
      body: JSON.stringify(cartItem),
    };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}
function getCartItem(userId) {
  return new Promise((resolve, reject) => {
    const url = `/carts/find/${userId}`;
    const config = {
      method: "GET",
    };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

export { addCartItem, getCartItem };
