const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  //get paginate
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page: page, limit: 10 });
    return res.json(products);
  },
  //get
  // async index(req, res) {
  //   const products = await Product.find();
  //   return res.json(products);
  // },
  //post
  async store(req, res) {
    const products = await Product.create(req.body);
    return res.json(products);
  },
  //detalhe
  async show(req, res) {
    const products = await Product.findById(req.params.id);
    return res.json(products);
  },
  //atualiza
  async update(req, res) {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(products);
  },

  //deleta
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send();
  }
};
