import { getHostName } from "../util";

function Login(user) {
  console.log(user);
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/auth/login`;
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
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

export { Login };
