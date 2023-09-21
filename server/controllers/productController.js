import catchAsync from '../utils/catchAsync.js'
import Http from '../utils/axios.js'
import NodeCache from 'node-cache'
import checkCache from '../middleware/verifyCache.js'
const cache = new NodeCache()

const productController = {}

productController.index = catchAsync(async (req, res) => {
    let data = await checkCache(cache, 'product')
    if (!data) {
        let response = await Http.get('products')
        data = response.data
        await cache.set('product', data)
    }
    return res.status(200).json(data)
})

export default productController
