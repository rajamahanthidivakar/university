var express = require("express");
var indexRouter = require("./routes/index");
var app = express();
// To allow cors requests
app.use(function (req, res, next) {
  if (req.headers.origin) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With,Content-Type,Authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  }
  next();
});

const db = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "123abc",
    database: "test",
  },
});
app.set("db", db);

app.use("/", indexRouter);

app.listen(9000, () => {
  console.log(`Server listening at http://localhost:9000`);
});

module.exports = app;
