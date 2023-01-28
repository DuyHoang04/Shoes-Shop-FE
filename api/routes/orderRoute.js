import express from "express";
import { createOrder, getOrder } from "../controllers/orderController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.post("/", verifyToken, createOrder);
router.get("/find/:id", getOrder);

export default router;
