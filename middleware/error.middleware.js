export const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Storage Error";

    return res.status(statusCode).json({
        success: false,
        msg: message
    })
}