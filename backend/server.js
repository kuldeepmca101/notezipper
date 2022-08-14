const express = require("express");
const notes = require("./data/notes");
const dotenv = require('dotenv');
const connectDB = require("./config/db");
// const bodyParser = require('body-parser')

const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();

connectDB();

const app = express(); // main thing

app.use(express.json()); // to accept json data

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', (req, res) => {
    res.send('Api is running');
});

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`First Server started on PORT ${PORT}`));