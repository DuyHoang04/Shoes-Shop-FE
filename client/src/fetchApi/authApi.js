import { getHostName, toastError, toastSuccess } from "../util/index";

function Login(user) {
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

function Register(newUser) {
  console.log(newUser);
  return new Promise((resolve, reject) => {
    const url = "/auth/register";
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

export { Login, Register };
