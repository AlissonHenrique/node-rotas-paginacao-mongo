const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

///connect
require("./connect");

require("./models/Product");

//rotas
app.use("/", require("./routes"));

app.listen(3001, response => {
  console.log("o servidor esta rodado na porta 3001");
});
