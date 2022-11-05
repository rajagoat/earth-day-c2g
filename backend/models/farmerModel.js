const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const farmerSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
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

module.exports = mongoose.model('Farmer', farmerSchema);