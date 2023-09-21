import catchAsync from '../utils/catchAsync.js'
import Http from '../utils/axios.js'
import NodeCache from 'node-cache'
import checkCache from '../middleware/verifyCache.js'
const cache = new NodeCache()

const userController = {}

userController.index = catchAsync(async (req, res) => {
    let data = await checkCache(cache, 'users')
    if (!data) {
        const response = await Http.get('/users')
        data = response.data
        await cache.set('users', data)
    }
    return res.status(200).json(data)
})

export default userController
