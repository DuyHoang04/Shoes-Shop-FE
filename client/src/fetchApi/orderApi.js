function createOrderItem({ infoUser, userToken }) {
  return new Promise((resolve, reject) => {
    const url = `/orders`;
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${userToken}`,
      },
      body: JSON.stringify(infoUser),
    };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

export { createOrderItem };
