const express = require("express");

const app = express();
app.use(express.json());

const todos = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const todo = {
    id: Date.now(),
    text: req.body.text
  };

  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
