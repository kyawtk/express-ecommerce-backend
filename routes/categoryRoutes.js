import { Router } from "express";
import {
  getAllCategories,
  getCategoryById,
  deleteCategoryById,
  createCategory,
} from "../controllers/categoryController.js";
const router = Router();

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.post("/", createCategory);

router.delete("/:id", deleteCategoryById);

export default router;
