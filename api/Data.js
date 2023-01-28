import express, { request } from "express";
import Product from "./model/Product.js";
import { products } from "./Mydata.js";

const importData = express.Router();

importData.post("/", async (req, res) => {
  await Product.remove({});
  const importProduct = await Product.insertMany(products);
  return res.status(200).json(importProduct);
});

export default importData;
