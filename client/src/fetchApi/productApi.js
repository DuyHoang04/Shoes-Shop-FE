function getProductsAtHome() {
  return new Promise((resolve, reject) => {
    console.log("FETCH API");
    const url = "/products?new=true";
    const config = { method: "GET" };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

function getProductsFilter(filter) {
  const { tag, brand, lowPrice, highPrice, page } = filter;
  return new Promise((resolve, reject) => {
    const url = `/products?page=${page}&tag=${tag}&${
      brand ? "brand=" + brand : ""
    }&${lowPrice && "low=" + lowPrice}&${highPrice && "high=" + highPrice}`;
    console.log(url);
    const config = { method: "GET" };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

function getInfoProduct(id) {
  console.log(id);
  return new Promise((resolve, reject) => {
    const url = `/products/find/${id}`;
    const config = {
      method: "GET",
    };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

function addCommentProduct({ idProduct, newComment, userToken }) {
  return new Promise((resolve, reject) => {
    const url = `/products/${idProduct}/review`;
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${userToken} `,
      },
      body: JSON.stringify(newComment),
    };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

export {
  getProductsAtHome,
  getProductsFilter,
  getInfoProduct,
  addCommentProduct,
};
