import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  reviewProduct,
  updateProduct,
} from "../controllers/ProductController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

//CREATE PRODUCT
router.post("/", createProduct);
//UPDATE PRODUCT
router.put("/:id", updateProduct);
//DELETE PRODUCT
router.delete("/:id", deleteProduct);
//GET PRODUCT
router.get("/find/:id", getProduct);

router.post("/:id/review", verifyToken, reviewProduct);

//GET ALL PRODUCT
router.get("/", getAllProduct);

export default router;
