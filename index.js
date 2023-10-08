const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
const mongooes = require("mongoose");

dotenv.config({path: './routes/.env'});
mongooes
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to v1 db"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(process.env.PORT || port, () =>
  console.log(`te hub is  listening on port ${ process.env.PORT }!`)
);
