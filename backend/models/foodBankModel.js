const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodBankSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
    },
});

module.exports = mongoose.model('Food Bank', foodBankSchema);