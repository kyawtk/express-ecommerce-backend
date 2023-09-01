import { Router } from "express";
import {getAllProducts, getProductById, deleteProductById, updateProductById, createProduct} from '../controllers/productController.js'
const router = Router();



router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/', createProduct)
router.put('/:id', updateProductById)
router.delete('/:id', deleteProductById)




export default router;
