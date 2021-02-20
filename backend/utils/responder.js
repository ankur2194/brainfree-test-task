const success = (data) => {
    return {
        success: true,
        data
    };
};

const error = (error) => {
    return {
        success: false,
        error
    };
};

const validationError = (error) => {
    return {
        success: false,
        error: {
            VALIDATION_ERROR: error.body
        }
    };
};

module.exports = { success, error, validationError };