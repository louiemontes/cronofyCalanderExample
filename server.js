const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/cat", function(req, res) {
  console.log(__dirname);

  axios
    .get("http://thecatapi.com/api/images/get")
    .then(data => res.send(data.request.res.responseUrl))
    .catch(err => console.log(err));
});

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(process.env.PORT || 8080);
