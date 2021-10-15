const express = require("express");
const next = require("next");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const pages = require("./pages");

const envFile = dev ? `.env.local` : ".env";

dotenv.config({ path: envFile });

let urlMongo = "";

if (process.env.DB_USER) {
    urlMongo = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
} else {
    urlMongo = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
}

mongoose
    .connect(urlMongo, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then((db) => console.log(`Connected to Mongo ${db.connection.port}`))
    .catch((err) => console.error(err));

app.prepare().then(() => {
    const server = express();

    server.use(cors());
    server.use(express.json());

    pages.map((page) => {
        server.get(page.path, (req, res) => {
            return app.render(req, res, page.url, req.query);
        });
    });

    server.use("/api/user", require("./routes/users"));

    server.all("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
