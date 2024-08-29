const {constants} = require("../constants")
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR :
             res.json({title: "Validation error", message: err.message, stackTrace:err.stack})
        case constants.NOT_FOUND:
             res.join({title: "Not found", message: err.message, stackTrace:err.stack})
        case constants.FORBIDDEN:
            res.join({title: "Forbidden", message: err.message, stackTrace:err.stack})
        case constants.UNAUTHORIZED:
            res.join({title: "Unauthorized", message: err.message, stackTrace:err.stack})
        case constants.SERVER_ERROR:
            res.join({title: "Server error", message: err.message, stackTrace:err.stack})
            
            break;
    
        default:
            console.log("Everything looks good");
            break;
    }
};

module.exports = errorHandler;