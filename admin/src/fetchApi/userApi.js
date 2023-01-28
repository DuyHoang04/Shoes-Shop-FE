function getUser() {
  return new Promise((resolve, reject) => {
    const url = "/users";
    const config = { method: "GET" };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

function addUser(product) {
  return new Promise((resolve, reject) => {
    const url = "/users";
    const config = {
      method: "POST",
      body: product,
    };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

export { getUser, addUser };
