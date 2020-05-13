function getItems() {
  return fetch("/api/items")
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

function addItems(title) {
  let res = fetch("/api/items", {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    method: "POST",
    body: JSON.stringify(title),
  }).then((res) => res.json());
  return res;
}

export { getItems, addItems };
