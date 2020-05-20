function getItems() {
  return fetch("/api/items")
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

function addItems(title, description, picture, category) {
  let res = fetch("/api/items", {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    method: "POST",
    body: JSON.stringify(title, description, picture, category),
  }).then((res) => res.json());
  return res;
}

function register(name, surname, username, email, password, confirm_password) {
  let res = fetch("/api/users", {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    method: "POST",
    body: JSON.stringify(
      name,
      surname,
      username,
      email,
      password,
      confirm_password
    ),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return res;
}

function login(email, password) {
  let res = fetch("/api/auth", {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    method: "POST",
    body: JSON.stringify(email, password),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return res;
}

function getProfile(userID) {
  return fetch("/api/auth")
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export { getItems, addItems, register, login, getProfile };
