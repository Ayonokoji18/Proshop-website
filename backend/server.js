import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import products from "../backend/data/products.js";
import connectDB from "../backend/config/db.js";

connectDB();
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Api is Running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: " Product not Found" });
  }
});

app.listen(port, (req, res) => {
  console.log(`Server is Running on port`, $(port));
});
