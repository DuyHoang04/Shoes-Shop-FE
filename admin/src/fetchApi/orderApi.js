import { getHostName } from "../util";

function getAllOrder(user) {
  console.log(user);
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/orders`;
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

export { getAllOrder };
