module.exports = {
    json: (req, res, next) => {
        if (req.headers['content-type'] != "application/json") {
            return res
                .status(415)
                .json({ message: 'Content type not allowed' });
        }
        next();
    },
    urlEncoded: (req, res, next) => {
        if (req.headers['content-type'] != "application/x-www-form-urlencoded") {
            return res
                .status(415)
                .json({ message: 'Content type not allowed' });
        }
        next();
    }
};