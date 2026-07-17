const express = require("express");

const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(express.json());

app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
    res.send("Todo Backend Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});