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
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};