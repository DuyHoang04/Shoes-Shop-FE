import { getHostName, toastError, toastSuccess } from "../util";

function getUser() {
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/users`;
    const config = { method: "GET" };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

function getUserDetail(userId) {
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/users/${userId}`;
    const config = { method: "GET" };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

function addUser(user) {
  console.log(user);
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/auth/register`;
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

function updateUser({ payload, accessToken }) {
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/users/update/${payload.userId}`;
    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload.dataUpdate),
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

function changePasswordUser({ payload, accessToken }) {
  console.log(accessToken);
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/users/change_password/${payload?.userId}`;
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload?.dataPass),
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
        console.log(error);
        reject(error);
        toastError(error.message);
      });
  });
}

function removeUser({ payload, accessToken }) {
  const userId = payload;
  return new Promise((resolve, reject) => {
    const url = `${getHostName()}/users/delete/${userId}`;
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
        console.log(error);
        reject(error);
        toastError(error.message);
      });
  });
}

export {
  getUser,
  addUser,
  getUserDetail,
  changePasswordUser,
  updateUser,
  removeUser,
};
