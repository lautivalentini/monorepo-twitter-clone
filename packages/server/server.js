const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const port = parseInt(process.env.PORT, 10) || 3000;
const URL_MONGO = process.env.URL_MONGO;

mongoose
    .connect(URL_MONGO, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then((db) => console.log(`Connected to Mongo ${db.connection.port}`))
    .catch((err) => console.error(err));

app.use(cors());
app.use(express.json());

app.use("/api/user", require("./routes/users"));

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
});
