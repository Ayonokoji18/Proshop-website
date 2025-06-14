import express from "express";
import products from "../backend/data/products.js";
import morgan from "morgan";

const port = 5000;

const app = express();

app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => console.log(`Server is runing on port ${port}`));
