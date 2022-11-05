const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodBankSchema = new Schema({
    name: {
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
        required: true
    },
    emailAddress: {
        type: String,
    },
});

module.exports = mongoose.model('Food Bank', foodBankSchema);