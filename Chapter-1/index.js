const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// console.log(data);
const products = data.products;

const express = require("express");
const app = express();
// const morgan = require("morgan"); -->morgan logs information about incoming HTTP requests, such as the request method, URL, status code, response time, and more.

//Middleware
app.use(express.json());
// app.use(morgan("default"));

///////////CRUD Operation/////////////

// Create
app.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
});

//Read
app.get("/products", (req, res) => {
  res.status(200).json(products);
});

// // Update || Put -> Overwrite the data, completely replace
app.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json({ ...req.body, id: id });
});

// Update || PATCH //applies these changes to the existing resource.

app.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productsIndex = products.findIndex((p) => p.id === id);
  const product = products[productsIndex];
  products.splice(productsIndex, 1, { ...product, ...req.body });
  res.status(200).send("Updated Using Patch");
});

// //Delete

app.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
});

app.listen(4000, () => console.log("Server is listing from Port no. 4000"));
