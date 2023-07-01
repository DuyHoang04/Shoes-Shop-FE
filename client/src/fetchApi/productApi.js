import { getHostName, toastError, toastSuccess } from "../util/index";

function getProductsAtHome() {
  return new Promise((resolve, reject) => {
    console.log("FETCH API");
    const url = `${getHostName()}/products/admin`;
    const config = { method: "GET" };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

function getProductsFilter(filter) {
  const { tag, brandId, minPrice, maxPrice, page } = filter;
  console.log(brandId && "&brandId=" + brandId, "BRANDID");
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/products?page=${page}&size=12&tag=${tag}&brandId=${
      brandId ? brandId : ""
    }&minPrice=${minPrice ? minPrice : 0}&${
      maxPrice && "maxPrice=" + maxPrice
    }`;
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
    const url = `${getHostName()}/products/${id}`;
    const config = {
      method: "GET",
    };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

function addCommentProduct({ payload, accessToken }) {
  const { productId, newComment } = payload;
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/products/${productId}/review`;
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken} `,
      },
      body: JSON.stringify(newComment),
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

function getSearchProduct({ textName, page }) {
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/products?name=${textName}&page=${page}`;
    const config = {
      method: "GET",
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
  getSearchProduct,
};
