//in memory cache
const checkCache = async (cache, name) => {
    const cacheData = await cache.get(name)
    if (cache.has(name)) {
        return cacheData
    }
    return null
}
export default checkCache
