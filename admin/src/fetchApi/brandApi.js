import { getHostName } from "../util";

function addBrand(brand) {
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/brands`;
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(brand),
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
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

function getAllBrand() {
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/brands`;
    const config = {
      method: "GET",
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
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

export { getAllBrand };
