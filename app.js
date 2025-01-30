const express = require("express");
const app = express();

const data = require("./MOCK_DATA.json");

const port = process.env.port || 8000;

app.get("/Users", (req, res) => {
  return res.json(data);
});

app.get("/Users/:id", (req, res) => {
  const id = Number(req.params.id);
  if (id) {
    const filteredUsers = data.filter((item) => {
      return item.id === id;
    });
    return res.json(filteredUsers);
  } else {
    return res.json(data);
  }
});

app.listen(port, () => {
  console.log(`Server start at ${port}`);
});
