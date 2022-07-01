const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const ErrorHander = require("../utils/errorhander");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {

        return next(new ErrorHander("Please Login to access This Resource", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);

    next();
});


// Ei Function ta sudhu admin user karr jonno babahar hoy
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {

            return next(new ErrorHander(
                `Role: ${req.user.role} is not allowed to access this resource`, 403
            ));
        }
        next();
    }
}