import express from "express";
import { addCartItem, getCart } from "../controllers/cartController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.post("/addItem/:id", verifyToken, addCartItem);
router.get("/find/:id", getCart);

export default router;
