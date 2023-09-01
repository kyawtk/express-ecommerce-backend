import Product from "../models/product.js";
import Category from '../models/category.js'
import "express-async-errors";
//route get 'products/'
const getAllProducts = async (req, res) => {
  const products = await Product.find({}).populate("category").exec();
  res.status(200).json(products);
};

//route get 'products/:id'
const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate("category").exec();
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};

//route post 'products/'
const createProduct = async (req, res) => {
  const product = new Product(req.body);

  const newProduct = await product.save();
  if (newProduct) {
    res.status(201).json(product);
  } else {
    res.status(400);
    throw new Error("Error creating product");
  }
};

//route put 'products/:id'
const updateProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(400);
    throw new Error("Product not found or something went wrong");
  }
};
//route delete 'products/:id'
const deleteProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  res.status(200).json(product);
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
