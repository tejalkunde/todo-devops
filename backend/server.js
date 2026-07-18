<<<<<<< HEAD
const express = require("express");

=======
require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

>>>>>>> e3e3eab (feat: add MongoDB and Docker Compose setup)
const todoRoutes = require("./routes/todoRoutes");

const app = express();

<<<<<<< HEAD
=======
connectDB();

>>>>>>> e3e3eab (feat: add MongoDB and Docker Compose setup)
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
    res.send("Todo Backend Running...");
});

<<<<<<< HEAD
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
=======
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
>>>>>>> e3e3eab (feat: add MongoDB and Docker Compose setup)
});