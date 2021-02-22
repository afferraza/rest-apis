const status = (req, res, next) => {
    try {
        return res.status(200).json({ message: 'Backend is ready' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    status,
}