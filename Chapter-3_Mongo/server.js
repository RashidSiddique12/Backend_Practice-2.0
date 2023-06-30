const express = require("express");
const server = express();
const mongoose = require("mongoose");
const productRouter = require("./routes/product");
// const userRouter = require("./routes/user");

// connect to mongo

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "E-commerce_demo",
  })
  .then(() => console.log("Database is connected"))
  .catch((e) => console.log(e));

server.use(express.json());
server.use("/products", productRouter.router);
// server.use("/users", userRouter.router);

server.listen(4000, () => console.log("Server is listing from Port no. 4000"));
