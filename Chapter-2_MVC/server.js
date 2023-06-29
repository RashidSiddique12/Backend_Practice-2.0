const express = require("express");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

server.use(express.json());
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

server.listen(4000, () => console.log("Server is listing from Port no. 4000"));
