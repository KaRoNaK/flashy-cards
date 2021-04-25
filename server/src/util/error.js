const createError = (errCode, message) => {
    let msg = message;

    if (Array.isArray(message)) {
        const errors = message.map((err) => err.msg);
        msg = errors.join(", ");
    }

    const err = new Error(msg);
    err.statusCode = errCode;

    return err;
};

export { createError };
