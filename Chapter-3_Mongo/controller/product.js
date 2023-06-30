const Product = require("../model/products");

exports.getAll = (req, res) => {
  res.status(200).json(products);
};

exports.created = async (req, res) => {
  await Product.create(req.body);
  res.status(201).json(req.body);
};

exports.replace = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json({ ...req.body, id: id });
};
exports.update = (req, res) => {
  const id = +req.params.id;
  const productsIndex = products.findIndex((p) => p.id === id);
  const product = products[productsIndex];
  products.splice(productsIndex, 1, { ...product, ...req.body });
  res.status(200).send("Updated Using Patch");
};

exports.deleteOne = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
};
