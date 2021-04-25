const errorHandler = (error, req, res, next) => {
    res.status(error.statusCode || 500);
    res.json({ error: error.message });
};

export default errorHandler;
