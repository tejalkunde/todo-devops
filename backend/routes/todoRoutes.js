const express = require("express");

const router = express.Router();

<<<<<<< HEAD
const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
} = require("../controllers/todoController");
=======
const { getTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todoController");
>>>>>>> e3e3eab (feat: add MongoDB and Docker Compose setup)

router.get("/", getTodos);

router.post("/", createTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

module.exports = router;