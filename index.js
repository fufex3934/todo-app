const express = require("express");

const PORT = 8000;
//init app
const app = express();

//view engine
app.set("view engine", "ejs");

//listen on port
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
