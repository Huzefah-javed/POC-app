export function error(err, req, res, next) {
    const status = err.status|| err.statusCode || 500;
    const msg = err.msg || err.message || "An unknown error occurred.";
        console.log("Error ", msg)
    return res.status(status).json({
        success: false,
        message: msg,
    });
}