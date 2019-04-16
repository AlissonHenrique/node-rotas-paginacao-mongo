const mongoose = require("mongoose");

const url =
  "mongodb+srv://dbuser:db123456@cluster0-aifdz.mongodb.net/test?retryWrites=true";

mongoose.connect(url, { useNewUrlParser: true }).then(
  () => {
    console.log("Banco Conectado");
  },
  err => {
    console.log(err);
  }
);
