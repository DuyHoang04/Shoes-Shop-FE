function getProducts() {
  return new Promise((resolve, reject) => {
    const url = "/products";
    const config = { method: "GET" };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

function addProducts(product) {
  return new Promise((resolve, reject) => {
    const url = "/products";
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

function deleteStudent(studentId) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:8080/students/${studentId}`;
    const config = {
      method: "DELETE",
    };

    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

function updateStudent(updateStudent) {
  console.log(updateStudent, "UPDATE");
  return new Promise((resolve, reject) => {
    const url = "http://localhost:8080/students/" + updateStudent.id;
    const config = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: updateStudent?.newName }),
    };

    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

function getPaginateStudent(page) {
  const limit = 5;
  return new Promise((resolve, reject) => {
    const url = `http://localhost:8080/students?_page=${page}&_limit=${limit}`;
    const config = {
      method: "GET",
    };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
}

function getSearchPaginateStudent({ textName, page }) {
  const limit = 5;
  return new Promise((resolve, reject) => {
    const url = `http://localhost:8080/students?q=${textName}&_page=${page}&_limit=${limit}`;
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
  getProducts,
  addProducts,
  deleteStudent,
  updateStudent,
  getPaginateStudent,
  getSearchPaginateStudent,
};
