const express = require("express");
const routes = express.Router();

const ProductCotroller = require("./controllers/ProductController");

routes.get("/", (req, res) => {
  return res.send("wetwet");
});

routes.get("/products", ProductCotroller.index);
routes.get("/products/:id", ProductCotroller.show);
routes.post("/products", ProductCotroller.store);
routes.put("/products/:id", ProductCotroller.update);
routes.delete("/products/:id", ProductCotroller.destroy);

module.exports = routes;
