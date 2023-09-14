const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send({"msg": 'Running from backend!'})
});

app.listen(4000, () => {
  console.log("App is running on 4000")
})