const express = require("express");
const app = express();
app.use(express.json());
require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
    res.send("API is running....");
});

userRoutes = require("./routes/userRoutes")
app.use('/api/user', userRoutes);

chatRoutes = require("./routes/chatRoutes")
app.use('/api/chat', chatRoutes);


const { notFound, errorHandler } = require("./middleware/errorMiddleware");
// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log("Server started on port " + PORT+ "."))