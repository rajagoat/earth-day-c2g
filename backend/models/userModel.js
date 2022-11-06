const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
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

// static signup method
userSchema.statics.signup = async function(username, email, password, typeOfUser) {
    const exists = await this.findOne({ email });

    if (exists) {
        throw Error('An account already exists with this email.');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({
        username,
        email,
        password: hash,
        typeOfUser
    });

    return user;
};

module.exports = mongoose.model('User', userSchema);