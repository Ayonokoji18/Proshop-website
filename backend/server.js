import express from "express";
import products from "../backend/data/products.js";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "product not found" });
  }
});

app.listen(port, () => console.log(`Server is runing on port ${port}`));
