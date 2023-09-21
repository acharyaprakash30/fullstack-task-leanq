import express from 'express'
import productRoute from './product.js'
import userRoute from './user.js'

const router = express.Router()

router.use('/products', productRoute)
router.use('/users', userRoute)
// router.use("/product",(req,res) =>{
//     return res.send("hello")
// })

// router.use('/user', userRoute);

export default router
