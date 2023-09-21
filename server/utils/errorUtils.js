const sendError = (err, req, res) => {
    if (req.originalUrl.startsWith('/')) {
        return res.status(err.statusCode).json({
            status: err.status,
            name: err.name,
            message: err.message,
            errorStack: err.stack,
        })
    }
}

export const handleError = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 500
    sendError(err, req, res)
}
