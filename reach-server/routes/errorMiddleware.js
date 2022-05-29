// 处理错误的中间件

module.exports = (err, req, res, next) => {
    if (err) {
        const errRegion = {
            code: 500,
            msg: err instanceof Error ? err.message : err
        }
        res.status(500).send(errRegion)
    } else {
        next();
    }
}