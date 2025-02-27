require("dotenv").config();
const express = require("express");

const app = express(); //just like we have .pi, .random, etc for MATH function so that we have many for app function

const port = 3000; //for the servver to listen

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello Twitter!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login via valid Creds</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur Code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

