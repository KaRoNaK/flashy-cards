const asyncWrapper = (callback) => (req, res, next) => {
    callback(req, res, next).catch(next);
};

export default asyncWrapper;
