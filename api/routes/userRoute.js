import express from "express";
import {
  DeleteUser,
  getAllUser,
  getUser,
  UpdateUser,
} from "../controllers/UserController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

//UPDATE USER
router.put("/:id", verifyToken, UpdateUser);
//DELETE USER
router.delete("/:id", verifyToken, DeleteUser);
// GET ADD USER
router.get("/", verifyToken, getAllUser);
// GET USER
router.get("/find/:id", verifyToken, getUser);

export default router;
