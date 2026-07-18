<<<<<<< HEAD
let todos = [];

const getTodos = (req, res) => {
    res.status(200).json(todos);
};

const createTodo = (req, res) => {

    const { title } = req.body;

    const todo = {
        id: Date.now(),
        title,
        completed: false
    };

    todos.push(todo);

    res.status(201).json(todo);
};

const updateTodo = (req, res) => {

    const id = Number(req.params.id);

    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    todo.completed = !todo.completed;

    res.status(200).json(todo);
};

const deleteTodo = (req, res) => {

    const id = Number(req.params.id);

    todos = todos.filter(t => t.id !== id);

    res.status(200).json({
        message: "Todo deleted"
    });
=======
const Todo = require("../models/Todo");

// Get all todos
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Create a new todo
const createTodo = async (req, res) => {
    try {
        const todo = await Todo.create({
            title: req.body.title
        });

        res.status(201).json(todo);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Update a todo
const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        todo.completed = !todo.completed;

        await todo.save();

        res.json(todo);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Delete a todo
const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        await todo.deleteOne();

        res.json({
            message: "Todo deleted"
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
>>>>>>> e3e3eab (feat: add MongoDB and Docker Compose setup)
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};