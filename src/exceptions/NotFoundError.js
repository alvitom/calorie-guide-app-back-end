const ApiError = require("./apiError");

class NotFoundError extends ApiError {
    constructor(message) {
        super(404, "error", message);
    }
}

module.exports = NotFoundError;