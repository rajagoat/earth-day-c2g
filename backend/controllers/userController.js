const User = require('../models/userModel');

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.login(email, password);
        res.status(200).json({_id: user._id, typeOfUser: user.typeOfUser});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// signup user
const signupUser = async (req, res) => {
    const {
        email,
        password,
        typeOfUser
    } = req.body;
    try {
        const user = await User.signup(email, password, typeOfUser);
        res.status(200).json({_id: user._id, typeOfUser: user.typeOfUser});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = { loginUser, signupUser }