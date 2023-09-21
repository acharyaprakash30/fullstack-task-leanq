import express from 'express'
import productController from '../controllers/productController.js'

const productRoutes = express.Router()

productRoutes.get('/', productController.index)

export default productRoutes
