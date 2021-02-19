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

module.exports = { success, error };