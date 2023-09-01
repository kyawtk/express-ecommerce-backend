import Category from "../models/category.js";
import "express-async-errors";
//route get 'categories/'
const getAllCategories = async (req, res) => {
  const categories = await Category.find({});
  res.status(200).json(categories);
};

//route get 'categories/:id'
const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findById(id);
  if (category) {
    res.status(200).json(category);
  } else {
    res.status(404);
    throw new Error("category not found");
  }
};

//route post 'categories/'
const createCategory = async (req, res) => {
  const category = new Category(req.body);

  const newCategory = await category.save();
  if (newCategory) {
    res.status(201).json(newCategory);
  } else {
    res.status(400);
    throw new Error("Error creating category");
  }
};

//route delete 'categories/:id'
const deleteCategoryById = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByIdAndDelete(id);
  res.status(200).json(category);
};

export {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategoryById,
};
