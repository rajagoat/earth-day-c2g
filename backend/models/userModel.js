const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    typeOfUser: {
        type: String,
        enum: {
            values: [
                'Farmer',
                'Gleaner',
                'Food Bank Worker'
            ],
            message: '{VALUE} is not supported for typeOfUser'
        },
        required: true
    }
});

// static login method
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (!email || !password) {
        throw Error('All fields must be filled.')
    }
    if (!user) {
        throw Error('Incorrect email.');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error('Incorrect password.');
    }

    return user;
}

// static signup method
userSchema.statics.signup = async function (email, password, typeOfUser) {
    const exists = await this.findOne({ email });
    if (exists) {
        throw Error('An account already exists with this email.');
    }
    // validation
    if (!email || !password || !typeOfUser) {
        throw Error('All fields must be filled.')
    }
    if (!validator.isEmail(email)) {
        throw Error('Invalid email entered.');
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Passwords need at least one uppercase letter, one lowercase letter, one special character, one number, and be a minimum of 8 characters long.')
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({
        email,
        password: hash,
        typeOfUser
    });

    return user;
};

module.exports = mongoose.model('User', userSchema);