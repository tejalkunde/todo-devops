require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");


const todoRoutes = require("./routes/todoRoutes");

const app = express();

connectDB();


app.use(express.json());

app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
    res.send("Todo Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);

});