import { getHostName } from "../util/index";
import { toastSuccess, toastError } from "../util/index";

function getProducts() {
  return new Promise((resolve, reject) => {
    console.log("CALL API");
    const url = `${getHostName()}/products/admin`;
    const config = { method: "GET" };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}
function getProductDetail(userId) {
  return new Promise((resolve, reject) => {
    console.log("CALL API");
    const url = `${getHostName()}/products/${userId}`;
    const config = { method: "GET" };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

function addProducts({ payload, accessToken }) {
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/products`;
    const config = {
      method: "POST",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      body: payload,
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

function updateProducts({ payload, accessToken }) {
  const { productId, formDataProduct } = payload;
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/products/update/${productId}`;
    const config = {
      method: "PUT",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      body: formDataProduct,
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

function removeProduct({ payload, accessToken }) {
  const productId = payload;
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/products/delete/${productId}`;
    const config = {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
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

export {
  getProducts,
  addProducts,
  getProductDetail,
  updateProducts,
  removeProduct,
};
