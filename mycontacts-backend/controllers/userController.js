const asyncHandler = require("express-async-handler")

//@desc Register user
//@route POST /api/user/register
//@access public
const registerUser = asyncHandler(async(req, res) =>{
    res.json({message : "Register user"})
});

//@desc Login user
//@route POST /api/user/login
//@access public
const loginUser = asyncHandler(async(req, res) => {
    res.json({message : "Login user"})
});

//@desc Current user
//@route GET /api/user/login
//@access public
const currentUser = asyncHandler(async(req, res) => {
    res.json({message : "Current user information"})
})

module.exports = {registerUser, loginUser, currentUser}